import userService from '@/services/user-service.js'

export default {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        },
    },
    actions: {
        async loadUser(context) {
            const user = await userService.getUser();
            console.log('user in module',user)
            context.commit({ type: 'setUser', user });
        },
        async saveTransfer({ commit }, { transfer}){
           const user= await userService.update(transfer);
           commit({ type: 'setUser', user });
        }
    
    },
};
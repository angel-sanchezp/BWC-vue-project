import { createStore } from 'vuex';
import contactModule from '../store/contact.module.js';
import userModule from '../store/user.module.js';

// Create a new store instance.
const store = createStore({
    strict: true,
    state: {
    },
    getters: {

    },
    mutations: {
    },
    actions: {},
    modules: {
        contactModule,
        userModule
    }
});

export default store;
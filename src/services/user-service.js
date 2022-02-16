'use strict';
// import { createSecureServer } from 'http2';
// import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_LOGIN, SOCKET_EMIT_LOGOUT } from './socket.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
var gWatchedUser = null;

export default {
    // login,
    // logout,
    // signup,
    // getLoggedinUser,
    // getUsers,
    // getById,
    // remove,
    update,
    getUser,
}

// To help debugging from console
// window.userService = userService

const KEY = 'UsersDB'

// getUsers()

function getUser() {
    return {
        name: "Angelica Sanchez",
        coins: 85,
        moves: [
            {
                toId: "5a56640269458945154b32ca",
                to: "Perez Lorena",
                at: "4/2/22",
                amount: 10,

            },
            {
                toId: "7893640269458955d64b32ca",
                to: "Perez Diego",
                at: "1/2/22",
                amount: 5,

            }
        ]

    }
}

function _createDefaultUsers() {
    return [
        {
            name: "Angelica Sanchez",
            coins: 100,
            moves: []

        },
        {
            name: "Stas Serbnistki",
            coins: 80,
            moves: []

        },
        {
            name: "Liam Serebnitski",
            coins: 100,
            moves: []

        },

    ]


}



async function getUsers() {
    var users = await DbService.query(KEY);
    if (!users || !users.length) {
        users = _createDefaultUsers();
        await DbService.insert(KEY, contacts);
    }
    return users;
    // return httpService.get(`user`)
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    gWatchedUser = user;
    return user;
}
function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(transfer) {
    const user = getUser()
    user.coins = user.coins - transfer.amount
    user.moves.push(transfer)
    // await storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
    return user;
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)

    // const user = await httpService.post('auth/login', userCred)
    // socketService.emit('set-user-socket', user._id);
    // if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.emit('set-user-socket', user._id);
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.emit('unset-user-socket');
    // return await httpService.post('auth/logout')
}

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}


// (async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })();



// This IIFE functions for Dev purposes
// It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
//     // Dev Helper: Listens to when localStorage changes in OTHER browser

//     // Here we are listening to changes for the watched user (comming from other browsers)
//     window.addEventListener('storage', async () => {
//         if (!gWatchedUser) return;
//         const freshUsers = await storageService.query('user')
//         const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
//         if (!watchedUser) return;
//         if (gWatchedUser.score !== watchedUser.score) {
//             console.log('Watched user score changed - localStorage updated from another browser')
//             socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
//         }
//         gWatchedUser = watchedUser
//     })
// })();

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();


'use strict';

import { DbService } from './db-service.js';

const KEY = 'ContactDB';

export default {
    query,
    getById,
    remove,
    save,
    getEmptyContact
};

async function query() {
    var contacts = await DbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts();
        await DbService.insert(KEY, contacts);
    }
    return contacts;
}

async function getById(id) {
    const contact = await DbService.get(KEY, id);
    if (!contact) {
        throw new Error('Unknown Car');
    }
    return contact;
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(contact) {
    if (contact._id) return DbService.put(KEY, contact);
    else return DbService.post(KEY, contact);
}


function getEmptyContact() {
    return {
        _id:'',
        name:'',
        email:'',
        phone:'',
    };
}

function _createDefaultContacts() {
    return [
        _createContact('4524580265454545d64b32ca','Ochoa Hyde','ochoahyde@renovize.com', '052-734-1991' ,'@/assets/imgs/1.png'),
        _createContact('98632502147583a5d64b32ca','Floyd Dan','dan@gmail.com', '054-635-7896','@/assets/imgs/2.png'),
        _createContact('8966533269458955d64b32ca','Mesia Patrick','patrikM@hotmail.com', '050-789-8954','@/assets/imgs/2.png'),
        _createContact('5a56640269458945154b32ca','Perez Lorena','lorenaM@hotmail.com', '054-789-1445','@/assets/imgs/1.png'),
        _createContact('4552640269458955d64b32ca','Edry Julia','juliaM@hotmail.com', '052-981-2546','@/assets/imgs/1.png'),
        _createContact('7893640269458955d64b32ca','Perez Diego','die89@hotmail.com', '050-489-7391','@/assets/imgs/2.png'),
        _createContact('1236975869458955d64b32ca','Panker Yuval','yuviM@hotmail.com', '052-465-1454','@/assets/imgs/1.png'),
        _createContact('8962440269458955d64b32ca','Levi Victor','viC@hotmail.com', '054-466-5632','@/assets/imgs/2.png'),
    ];
}

function _createContact(_id, name, email, phone,url) {
    return {
        _id,
        name,
        email,
        phone,
        url,
        recivies:[],
    };
}
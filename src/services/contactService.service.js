'use strict';

import { DbService } from './db-service.js';
import { httpService } from './http.services.js';

const KEY = 'ContactDB';

export default {
    query,
    getById,
    remove,
    save,
    getEmptyContact
};

async function query(filterBy) {
    return httpService.get('contact',filterBy)
    //         if (!contacts || !contacts.length) {
    //     contacts = _createDefaultContacts();
    //     // await DbService.insert(KEY, contacts);
    //         // return httpService.get(`user`)

    // }
    // return contacts;
}

async function getById(contactId) {
    return httpService.get(`contact/${contactId}`)

    // const contact = await DbService.get(KEY, id);
    // if (!contact) {
    //     throw new Error('Unknown Car');
    // }
    // return contact;
}

function remove(contactId) {
    // return DbService.delete(KEY, id);
    return httpService.delete(`contact/${contactId}`)

}

function save(contact) {
    if (contact._id) {
        return  httpService.put(`contact/${contact._id}`,contact)
    } else {
        return httpService.post(`contact`,contact)
    }
    // if (contact._id) return DbService.put(KEY, contact);
    // else return DbService.post(KEY, contact);
}


function getEmptyContact() {
    return {
        name:'',
        email:'',
        phone:'',
        url:'https://res.cloudinary.com/angelsa/image/upload/v1645031533/BWC/2_j7fodl.png',
        recivies:[]
    };
}

function _createDefaultContacts() {
    return [
        _createContact('4524580265454545d64b32ca','Ochoa Hyde','ochoahyde@renovize.com', '052-734-1991' ,'https://res.cloudinary.com/angelsa/image/upload/v1645031471/BWC/1_veyxkf.png'),
        _createContact('98632502147583a5d64b32ca','Floyd Dan','dan@gmail.com', '054-635-7896','https://res.cloudinary.com/angelsa/image/upload/v1645031533/BWC/2_j7fodl.png'),
        _createContact('8966533269458955d64b32ca','Mesia Patrick','patrikM@hotmail.com', '050-789-8954','https://res.cloudinary.com/angelsa/image/upload/v1645031533/BWC/2_j7fodl.png'),
        _createContact('5a56640269458945154b32ca','Perez Lorena','lorenaM@hotmail.com', '054-789-1445','https://res.cloudinary.com/angelsa/image/upload/v1645031471/BWC/1_veyxkf.png'),
        _createContact('4552640269458955d64b32ca','Edry Julia','juliaM@hotmail.com', '052-981-2546','https://res.cloudinary.com/angelsa/image/upload/v1645031471/BWC/1_veyxkf.png'),
        _createContact('7893640269458955d64b32ca','Perez Diego','die89@hotmail.com', '050-489-7391','https://res.cloudinary.com/angelsa/image/upload/v1645031533/BWC/2_j7fodl.png'),
        _createContact('1236975869458955d64b32ca','Panker Yuval','yuviM@hotmail.com', '052-465-1454','https://res.cloudinary.com/angelsa/image/upload/v1645031471/BWC/1_veyxkf.png'),
        _createContact('8962440269458955d64b32ca','Levi Victor','viC@hotmail.com', '054-466-5632','https://res.cloudinary.com/angelsa/image/upload/v1645031533/BWC/2_j7fodl.png'),
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
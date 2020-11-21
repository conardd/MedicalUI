import axios from 'axios';
import {GET_USERS,ADD_USER} from './actionTypes';

let initUsers = [{'userName':'','password':'','role':''}];

// export const getUsers = content => ({
//     type: GET_USERS,
//     payload: initUsers
// });
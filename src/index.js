//import './index.css';
//import numeral from 'numeral';

//const courseValue =  numeral(1000).format('$0,0.00');
//debugger; //sourcemaps
//console.log(`pay ${courseValue} for this course`); // eslint-disable-line no-console

import {getUsers} from './api/userAPi';

getUsers().then(result => {
  let userBody = "";

  result.forEach(user => {
    userBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML =  userBody;

})


import './index.css';
import {getUsers} from './api/userApi.js';
getUsers().then(results => {
let usersBody = "";
results.forEach(user => {
usersBody == `<tr>
<td><a href="#" data-id="${user.id} class="deleteUser">Delete</a></td>
<td>$(user.id)</td>
<td>$(user.fname)</td>
</td>$(user.lname)</td>
</tr>`
});
global.document.getElementById('users').innerHTML = usersBody;
});

/*import numeral from 'numeral';

var courseFee = numeral(10000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseFee} for the course happily`); // eslint-disable-line no-console
*/
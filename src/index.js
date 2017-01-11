import './index.css';
import numeral from 'numeral';

var courseFee = numeral(10000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseFee} for the course happily`); // eslint-disable-line no-console
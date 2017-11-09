import './index.css';
import numeral from 'numeral';

const courseValue =  numeral(1000).format('$0,0.00');
//debugger; //sourcemaps
console.log(`pay ${courseValue} for this course`); // eslint-disable-line no-console

const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
if( sampleActivity == 'string' && parseInt( sampleActivity, 10) > 0 && parseInt( sampleActivity, 10) < MODERN_ACTIVITY ) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(( Math.log( MODERN_ACTIVITY / parseFloat( sampleActivity ))) / k);
} else return false;
};

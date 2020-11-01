const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

if(!Array.isArray(members)) return false;
let result =  members.map((item) => {
    if (typeof item == 'string') return item.trim()[0].toUpperCase();
  }).sort().join(''); 
  return result;

};

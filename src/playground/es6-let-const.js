var nameVar = "Jeremy";
var nameVar = 2;
console.log('nameVar', nameVar);

//These can be reassign, but not redefine
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//Can not be reasign or redefine
const nameConst = 'Paul'
//nameConst = 'Peter'
console.log('nameConst', nameConst)

// Block scoping 

var fullName = 'Jeremy Lincoln';
let firstname;
if(fullName) {
    firstname = fullName.split(' ')[0];
    console.log(firstname)
}

console.log(firstname)

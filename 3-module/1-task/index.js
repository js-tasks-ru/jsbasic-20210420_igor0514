
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];


function namify(users) {
  // ваш код...
  let namesArray = [];
  for(let key in users){
    console.log(users[key].name);
    namesArray.push(users[key].name);
    
  }
return namesArray;
}

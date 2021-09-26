//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
const person = {
  name: 'John',
  age: 40,
  hairСolor: 'red'
};

const woman =Object.create(person);

woman.ownColor = "blond";
woman.ownName = "Elen";

for(let key in woman) {
if(woman.hasOwnProperty(key)) {
  console.log(key, woman[key]);
  }
}
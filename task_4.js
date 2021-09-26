/*Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
План:
1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
4. Создать экземпляры каждого прибора;
5. Вывести в консоль и посмотреть результаты работы, гордиться собой :)*/

function ElectricalDevice(power, name, turn){
    this.purpose = 'useful',
    this.power = power,
    this.turn = turn,
    this.name = name
  }
  
  ElectricalDevice.prototype.getDescription = function(power, name, turn) {
  
     console.log(`My ${name} has a power ${power} w and is ${turn}`);
  };
  
  function HouseElectricalDevice(power, name, turn, size) {
    this.name = name,
    this.power = power,
    this.turn = turn,
    this.size = size
  }
  
  HouseElectricalDevice.prototype = new ElectricalDevice();
  
  HouseElectricalDevice.prototype.getOtherDescription = function(power, name){
  
     console.log(`my ${name} has a power ${power} w and is big`);
  }
  
  const teapot = new ElectricalDevice();
  const fridge = new ElectricalDevice();
  const fridge2 = new HouseElectricalDevice(200, 'fridge', 'turned on', 'big');
  
  console.log(fridge2);
  
  teapot.getDescription(2500, 'Teapot', 'turned off');
  fridge.getDescription(100, 'Fridge', 'turned on');
  fridge2.getOtherDescription(200, 'Fridge2');


  /*
  function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");*/
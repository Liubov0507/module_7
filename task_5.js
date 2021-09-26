//Переписать консольное приложение из task_4  на классы.

class Parent {
    constructor(electricalDevice) {
     this.electricalDevice = electricalDevice || 'Teapot';
    }
   
    getInfo(){
    return `My ${this.electricalDevice} has a power of 2500 watts`;
    }
}
   
class Child extends Parent {
     constructor(device, electricalDevice){
         super(electricalDevice);
         this.device = device ? device : electricalDevice;
  }	
  getInfo() {
     if (this.device) {
         return `My ${this.device} has a power of 100 watts`;
  } else {
    return super.getInfo();
  }
 }
}

const fridge = new Child('Fridge');
console.log(fridge.getInfo());
   
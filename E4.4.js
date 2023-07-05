function Electrodevice (name, power) {
    this.name = name;
    this.power = power;
    this.turn = false;
}
function Lamps(name, power, color){
    this.name = name;
    this.power = power;
    this.color = color;
}

function Comps (name, power, ddr) {
    this.name = name;
    this.power = power;
    this.ddr = ddr;
}

function  Hoovers (name, power, brand) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.turbo = false;
}


Lamps.prototype = new Electrodevice();
Comps.prototype = new Electrodevice();
Hoovers.prototype = new Electrodevice();


Electrodevice.prototype.turnOn = function () {
    if (!this.turn) {
        this.turn = true;
        console.log(`Устройство: ${this.name} включено`);
    } else {
        console.log(`Устройство: ${this.name} УЖЕ включено!`);
    }
}

Electrodevice.prototype.turnOff = function () {
    if (this.turn) {
        this.turn = false;
        console.log(`Устройство: ${this.name} выключено`);
    } else {
        console.log(`Устройство: ${this.name} УЖЕ выключено!`);
    }
}
Electrodevice.prototype.getPower = function (){
    if (this.turn) {
        return this.power;
    }
    return 0;
}


Comps.prototype.choiceOSW =function (){
    if (this.turn) {
        console.log(`Для устройства: ${this.name} выбрана операционная система Windows`)
    }
}
Comps.prototype.choiceOSL = function (){
    if (this.turn) {
        console.log(`Для устройства: ${this.name} выбрана операционная система Linux`)
    }
}


Hoovers.prototype.turboOn = function () {
    if (!this.turbo && this.turn) {
        this.turbo = true;
        this.power += 50;
        console.log(`Для устройства: ${this.name} включен режим Турбо`);
    } else if (!this.turn){
        console.log(`Включите устройсто: ${this.name} в сеть`);
    } else {
        console.log(`Для устройства: ${this.name} режим Турбо УЖЕ включен!`);
    }

}

Hoovers.prototype.turboOff = function () {
    if (this.turbo && this.turn) {
        this.turbo = false;
        this.power -= 50;
        console.log(`Для устройства: ${this.name} режим Турбо выключен`);
    } else if  (!this.turn){
        console.log(`Для работы с режимом Турбо устройство: ${this.name} должен быть включено`);
    } else {
        console.log(`Для устройства ${this.name} режим Турбо УЖЕ выключен!`);
    }
}


const lamp1 = new Lamps('table_lamp',10,'green');
const comp1 = new Comps('notebook',50,4 );
const hoover1 = new Hoovers('washing_hoover',100,'Philips');


console.log(lamp1);
console.log(comp1);
console.log(hoover1);
lamp1.turnOn();
comp1.turnOn();
hoover1.turnOn();
console.log(lamp1.getPower()+comp1.getPower()+hoover1.getPower());
hoover1.turboOn();
console.log(lamp1.getPower()+comp1.getPower()+hoover1.getPower());
lamp1.turnOff();
comp1.turnOff();
console.log(lamp1.getPower()+comp1.getPower()+hoover1.getPower());
hoover1.turboOff();
console.log(lamp1.getPower()+comp1.getPower()+hoover1.getPower());
hoover1.turnOff();
console.log(lamp1.getPower()+comp1.getPower()+hoover1.getPower());
hoover1.turboOff()
console.log(lamp1);
console.log(comp1);
console.log(hoover1);
lamp1.turnOn()
comp1.turnOn()
comp1.choiceOSW()
console.log(lamp1);
console.log(comp1);
console.log(hoover1);
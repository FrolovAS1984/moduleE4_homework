class ElectroApp {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.turn = false;
    }
    turnOn() {
        if (!this.turn) {
            this.turn = true;
            console.log(`Устройство: ${this.name} включено`);
        } else {
            console.log(`Устройство: ${this.name} УЖЕ включено!`);
        }

    }
    turnOff() {
        if (this.turn) {
            this.turn = false;
            console.log(`Устройство: ${this.name} выключено`);
        } else {
            console.log(`Устройство: ${this.name} УЖЕ выключено!`);
        }
    }
    getPower() {
        if (this.turn) {
            return this.power;
        }
        return 0;
    }

}

class Lamps extends ElectroApp {
    constructor(name, power, color) {
        super(name, power);
        this.color = color;
    }
}

class Comps extends ElectroApp {
    constructor(name, power, ddr) {
        super(name, power);
        this.ddr = ddr;
    }
    choiceOSW() {
        if (this.turn) {
            console.log(`Для устройства: ${this.name} выбрана операционная система Windows`);
        }
    }
    choiceOSL() {
        if (this.turn) {
            console.log(`Для устройства: ${this.name} выбрана операционная система Linux`);
        }
    }
}


class Hoovers extends ElectroApp {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
        this.turbo = false;
    }
    turboOn() {
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

    turboOff() {
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
}

const lamp1 = new Lamps('table_lamp',5, 'red');
const comp1 = new Comps('notebook1', 10, 4);
const hoov1= new Hoovers('washing_hoover',50,'Philips');

console.log(lamp1);
console.log(comp1);
console.log(hoov1);

lamp1.turnOn();
comp1.turnOn();
hoov1.turnOn();
console.log(lamp1.getPower()+comp1.getPower()+hoov1.getPower());
hoov1.turboOn();
console.log(lamp1.getPower()+comp1.getPower()+hoov1.getPower());
lamp1.turnOff();
comp1.turnOff();
console.log(lamp1.getPower()+comp1.getPower()+hoov1.getPower());
hoov1.turnOff();
console.log(lamp1.getPower()+comp1.getPower()+hoov1.getPower());
hoov1.turboOn();



// Soal 1

// Release 0
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }
    get name() {
        return this._name;
    }
    get legs() {
        return this._legs;
    }
    get cold_blooded() {
        return this._cold_blooded;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Release 1
class Frog extends Animal {
    constructor(name) {
        super(name);
        this._name = name;
        this.name.legs;
        this._cold_blooded = true;       
    }
    jump() {
        return console.log("hop hop");
    }
}

class Ape extends Animal {
    constructor(name) {
        super(name);
        this._name = name;
        this._legs = 2;
        this.name._cold_blooded;
    }
    yell() {
        return console.log("Auooo");
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();

console.log('\n');

// Soal 2
// BELUM SELESAI
class Clock {
    constructor({ template }) {
        this.template
        this.timer
        this.date = new Date();
        this.hours = this.date.getHours();
        this.mins = this.date.getMinutes();
        this.secs = this.date.getSeconds();
    }
    render() {
        if (this.hours < 10) this.hours = '0' + this.hours;
        if (this.mins < 10) this.mins = '0' + this.mins;
        if (this.secs < 10) this.secs = '0' + this.secs;

    }
    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    }
    stop() {
        clearInterval(this.timer);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  
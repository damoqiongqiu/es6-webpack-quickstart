import Monkey from "./Monkey";

class Human extends Monkey {
    constructor(name, age) {
        super(name, age);
    }

    eat() {
        console.log(`人类吃东西>${this.name}`);
    }

    run() {
        console.log(`人类运动>${this.name}`);
    }

    coding() {
        console.log("人类还会编码...");
    }
}

export default Human;
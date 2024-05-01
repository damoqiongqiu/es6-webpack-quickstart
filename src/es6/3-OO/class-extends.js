/**
 * 内置Class支持是一个重大的修改，这些特性让JS的面向对象表现力进一步增强
 * 2008年，在ES4.0就提出来了，ES4.0因为JS之父Eich和IE团队的Chris Wilson激烈的争论而废弃
 * Note：这里可以对照Java的继承机制来理解，在IDEA里面写同样的Java继承案例，然后对照讲解
 */

//关于命名规范，如果采用 OO 的写法，建议全部接受 Java 的编码规范。
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`动物吃东西>${this.name}`);
    }

    run() {
        console.log(`动物运动>${this.name}`);
    }

    //特别注意：ES6目前还不支持static属性，从语法一致性层面看，这是非常糟糕的
    static testStaticMethod() {
        console.log("Animal上的静态方法...");
    }

    toString() {
        return "(" + this.name + ", " + this.age + ")";
    }
}

class Monkey extends Animal {
    constructor(name, age) {
        super(name, age);
    }
}

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

let person = new Human("大漠穷秋", 18);
console.log(person.name);
person.eat();
person.run();
person.coding();
Human.testStaticMethod();

//特别注意：没有private/public/protected这些访问修饰符
//特别注意：原生对象不能继承，这又是一个非常糟糕的点，这种概念上的不一致让开发者理解起来非常难，Java里面不是这样的
// Boolean()
// Number()
// String()
// Array()
// Date()
// Function()
// RegExp()
// Error()
// Object()

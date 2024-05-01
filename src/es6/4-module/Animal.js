//关于命名规范，如果采用 OO 的写法，建议全部接受 Java 的编码规范。
class Animal {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
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

export default Animal;
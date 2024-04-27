/**
 * 
 * 给老师的 Note：在讲 ES6 的 Iterator 之前，最好先介绍一下 Java 的集合框架，因为 ES6 的这套迭代器设计深受 Java 语言的影响。
 * 
 * Iterator 迭代器接口是一个重要的更新，它让对数据结构的遍历操作统一到了一个接口之下，概念模型的一致性更好，理解起来更加方便。
 * 
 * 目前实现了 Iterator 接口的内置类如下（共8个）：
 * - Array
 * - Set
 * - Map
 * - String
 * - TypedArray
 * - 函数的 arguments 对象
 * - NodeList 对象
 * - ES9 里面的 Object 也实现了 Iterator 接口
 */

/**
 * 典型场景1：隐含调用 Iterator
 * 什么是“隐含调用”？隐含调用的意思是说，虽然开发者在编码的时候没有明确去调用某个方法，但是在运行时，实际上悄悄在底层进行了调用。
 */
//for...of循环，只要某个数据结构实现了 Iterator 接口，就可以使用这种语法
//对于开发者来说，你自己也可以定义个数据结构来实现 Iterator 接口，这样就可以统一使用迭代器来进行操作了。
let arr1 = [1, 2, 3];
for (let item of arr1) {
    console.log(item);
}

/**
 * 典型场景2：解构赋值、spread操作符、rest操作符都会隐含调用 Iterator
 */
let [a, b, c] = [4, 5, 6];
console.log(a);
console.log(b);
console.log(c);

/**
 * 典型场景3：显式调用迭代器
 * Note：这种用法不常见，不建议开发者在业务系统里面采用这样的黑魔法，有炫技的嫌疑。
 * Note：相对于 Java 里面的优雅方式，ES6 提供的这套语法非常糟糕，它需要用到 Symbol 这个东西，不适合人类理解和记忆
 * Note：这里对比 Java 里面的 Iterator 接口
 */
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
//iter.hasNext()
iter.next();
iter.next();
iter.next();
iter.next();

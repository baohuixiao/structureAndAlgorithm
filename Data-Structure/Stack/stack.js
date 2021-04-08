/**
 * 使用JavaScript代码实现栈结构
 * 
 * methods
 *  push    入栈
 *  pop     出栈
 *  getTopElement 返回栈顶元素，但不会移除元素
 *  isEmpty  查看栈是否为空
 *  size    返回栈内元素的个数
 *  toString  以字符串的方式展示栈内的所有元素
 */

// 通过构造函数
function Stack() {
    this.list = [];
}

// 入栈
Stack.prototype.push = function(item) {
    this.list.push(item)
}

// 出栈
Stack.prototype.pop = function() {
    return this.list.pop();
}

// 返回栈顶元素
Stack.prototype.getTopElement = function() {
    return this.list[this.list.length - 1];
}

// 查看栈是否为空
Stack.prototype.isEmpty = function() {
    return this.list.length === 0;
}

// 返回栈内元素的个数
Stack.prototype.size = function() {
    return this.list.length;
}

// 以字符串的方式展示栈内的所有元素
Stack.prototype.toString = function() {
    return String(this.list);
}

let stack = new Stack();
stack.push(1)
stack.push(9)
console.log(stack.size()) // 2
console.log(stack.toString()) // 1,9
console.log(stack.isEmpty()) // false
console.log(stack.getTopElement()) // 9
console.log(stack.pop()) // 9
console.log(stack.size()) // 1
console.log(stack.getTopElement()) // 1


// ------------ 实战：将十进制数转为二进制 ------------
/**
 * 十进制转二进制，将一个数循环除以2，直到无法再除以后，将所有余数倒着连起来
 */

function decimalToBinary(num) {
    let stack = new Stack();
    while(true) {
        stack.push(num % 2);
        num = parseInt((num / 2), 10);
        if (!parseInt((num / 2), 10)) {
            stack.push(num % 2);
            break;
        };
    }
    return Number(stack.toString().split(',').reverse().join(''))
}

console.log(decimalToBinary(10))
# 栈(Stack)

### 一、什么是栈

你可以把栈理解为只有一个出入口的羽毛球筒，最底下的羽毛球永远是最先放进的，要想把最底下的羽毛球拿出来，只能将上面的羽毛球一个个取出后才能实现。所以栈的特定是**“先进后出”**或者**“后进先出”**，最先放入的羽毛球处于**“栈底“**位置，最后放入的羽毛球处于**”栈顶“**位置。

![](https://user-images.githubusercontent.com/75166546/114122247-72451580-9922-11eb-889e-f047d55bb181.png)

### 二、栈的相关操作

1. 进栈：进栈可以理解为向羽毛球筒中塞入羽毛球

   ![](https://user-images.githubusercontent.com/75166546/114122287-8e48b700-9922-11eb-8c16-5507e106ec6a.png)

2. 出栈：出栈可以理解为向羽毛球筒中取出羽毛球

   ![](https://user-images.githubusercontent.com/75166546/114122314-9a347900-9922-11eb-80d5-6474d0bbc80c.png)

### 三、用代码实现一个栈结构

使用JavaScript代码，结合数组实现一个栈结构

```javascript
/**
 * 使用JavaScript代码实现栈结构
 * 
 * methods
 *  push    入栈
 *  pop     出栈
 *  getTopItem 返回栈顶元素，但不会移除元素
 *  isEmpty  判断栈是否为空
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
Stack.prototype.getTopItem = function() {
    return this.list[this.list.length - 1];
}

// 判断栈是否为空
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
console.log(stack.getTopItem()) // 9
console.log(stack.pop()) // 9
console.log(stack.size()) // 1
console.log(stack.getTopItem()) // 1
```

### 四、栈的相关扩展知识

##### 1. 单调栈

​	单调递增的栈或者单调递减的栈

##### 2. js的执行栈

​	JavaScript的执行栈利用的就是栈结构，将需要执行的上下文推入栈中，将执行后的上下文进行出栈处理
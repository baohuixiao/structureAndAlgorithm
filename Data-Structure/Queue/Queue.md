# 队列

#### 一、普通对队列

可以将普通队列理解为一只排队买票的队伍，队伍分为队头和队尾。需要买票的人都会到队尾排队，而买到票的人则会从队头离开。越先加入队列的人也就越快买到票，越先离开。由此可以看出队列的特性**“先进先出”**、**“后进后出”**

![01](https://user-images.githubusercontent.com/75166546/114640853-84003180-9d03-11eb-9fbe-d20cb9c9b999.jpg)

#### 二、优先队列

优先队列可以看成是在普通队列的基础上给每一个元素加上权重，权重越大则越靠近队头，这样子也就不满足**“先进先出”**、**“后进后出”**原则了，如果权重相等，则按照普通队列对待。和上面的排队场景一样，老弱病残拥有优先排队权，也就相当于加持了权重一般。

#### 三、队列的相关操作

![02](https://user-images.githubusercontent.com/75166546/114641137-1ef90b80-9d04-11eb-98c4-345d6b2f5723.jpg)

由上图可知，队列的主要操作包括入队列和出队列，和排队购票相比拟的话就是进入购票队伍的尾部等待购票和买完票从队伍的头部离开

#### 四、用代码实现一个队列结构

```javascript
/**
 * 使用JavaScript代码实现队列结构
 * 
 * methods
 *  enqueue   向队列后端添加元素
 *  dequeue   删除队列最前端的一个元素，并返回该元素
 *  front     返回队列最前端的元素，但是不移除该元素
 *  isEmpty   判断队列是否为空
 *  size      返回队列的长度
 *  toString  以字符串的形式展示队列内的所有元素
 */

function Queue() {
    this.list = []
}

// 向队列后端添加元素
Queue.prototype.enqueue = function(item) {
    this.list.push(item)
}

// 删除队列最前端的一个元素，并返回该元素
Queue.prototype.dequeue = function() {
    return this.list.shift();
}

// 返回队列最前端的元素，但是不移除该元素
Queue.prototype.front = function() {
    return this.list[0];
}

// 判断队列是否为空
Queue.prototype.isEmpty = function() {
    return this.list.length === 0;
}

// 返回队列的长度
Queue.prototype.size = function() {
    return this.list.length;
}

// 以字符串的形式展示队列内的所有元素
Queue.prototype.toString = function() {
    return String(this.list);
}

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(9)
console.log(queue.size()) // 2
console.log(queue.toString()) // 1,9
console.log(queue.isEmpty()) // false
console.log(queue.front()) // 1
console.log(queue.dequeue()) // 1
console.log(queue.size()) // 1
console.log(queue.front()) // 9

/**
 * 使用JavaScript代码实现优先队列结构
 * 
 * methods
 *  enqueue   向队列后端添加元素
 *  dequeue   删除队列最前端的一个元素，并返回该元素
 *  front     返回队列最前端的元素，但是不移除该元素
 *  isEmpty   判断队列是否为空
 *  size      返回队列的长度
 *  toString  以字符串的形式展示队列内的所有元素
 * 
 * 规定数字越小优先级越大，最小为0
 */
function PriorityQueue() {
    this.list = [];
}

function CreateElement(e, order) {
    this.element = e;
    this.order = order;
}

PriorityQueue.prototype.enqueue = function(e, order) {
    var element = new CreateElement(e, order);

    if (this.list.length === 0) {
        this.list.push(element);
        return;
    }

    for (let i = 0; i < this.list.length; i += 1) {
        if (element.order < this.list[i].order) {
            this.list.splice(i, 0, element)
            return;
        }
    }

    this.list.push(element);
}

PriorityQueue.prototype.dequeue = function() {
    return this.list.shift();
}

PriorityQueue.prototype.front = function() {
    return this.list[0];
}

PriorityQueue.prototype.isEmpty = function() {
    return this.list.length === 0;
}

PriorityQueue.prototype.size = function() {
    return this.list.length;
}

PriorityQueue.prototype.toString = function() {
    var str = '';
    for (var i = 0; i < this.list.length; i += 1) {
        str += this.list[i].element + ':' + this.list[i].order + ','
    }
    return str;
}

let pq = new PriorityQueue();
pq.enqueue('JavaScript', 5);
pq.enqueue('Java', 4);
pq.enqueue('Go', 6);
pq.enqueue('Python', 2);

console.log('----------- PriorityQueue -----------')

console.log(pq.list);
console.log(pq.size())
console.log(pq.front())
console.log(pq.dequeue())
console.log(pq.size())
console.log(pq.toString())
```


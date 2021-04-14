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


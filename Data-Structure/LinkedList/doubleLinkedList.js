/**
 * 使用JavaScript代码实现双向链表结构
 * 
 * methods
 *  append   将元素添加到链表的最后一个
 *  insert   在链表的某个位置插入元素
 *  get      获取链表对应位置的元素
 *  indexOf  获取某元素在链表中的索引
 *  update   修改链表中某个位置上的某元素
 *  removeAt   移除链表中某个位置上的元素的值
 *  remove     移除链表中的某元素
 *  isEmpty    判断链表是否为空
 *  size      返回链表内元素个数
 *  toString   以字符串形式展示链表内的所有元素
 */

function DoubleLinkedList() {
    this.head = null;
    this.length = 0;
    this.tail = null; // 表示链表中的最后一个
}

function Node(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
}

//  在链表尾部添加元素
DoubleLinkedList.prototype.append = function (item) {
    let node = new Node(item)

    if (this.length === 0) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    this.length += 1;
}

// 在链表的某个位置插入元素
DoubleLinkedList.prototype.insert = function (item, position) {
    if (position < 0 || position >= this.length) return false;

    let node = new Node(item);

    if (position === 0) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return true;
    } else if (position === this.length) {
        this.append(item)
    } else {
        let index = 0;
        let current = this.head;
        let prev = null;
        while (index < position) {
            prev = current;
            current = current.next;
            index++;
        }
        prev.next = node;
        node.prev = prev;
        node.next = current;
        current.prev = node;
        this.length++;
        return true;
        1
    }
}

// 获取链表对应位置的元素
DoubleLinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return false;

    if (position === 0) {
        return this.head.item;
    } else if (position === this.length) {
        return this.tail.item;
    } else {
        let index = 0;
        let current = this.head;
        while (index < position) {
            current = current.next;
            index++;
        }
        return current.item;
    }
}

// 获取某元素在链表中的索引
DoubleLinkedList.prototype.indexOf = function (item) {
    let index = 0;
    let current = this.head;
    while (current) {
        if (current.item === item) {
            return index;
        }
        current = current.next;
        index++;
    }
    return -1;
}

// 修改链表中某个位置上的某元素
DoubleLinkedList.prototype.update = function (item, position) {
    if (position < 0 || position >= this.length) return false;
    if (position === this.length - 1) {
        this.tail.item = item;
    } else {
        let index = 0;
        let current = this.head;
        while (index++ < position) {
            current = current.next;
        }
        current.item = item;
        return true;
    }
}

// 移除链表中某个位置上的元素
DoubleLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return false;
    this.length--;
    if (position === 0) {
        this.head = this.head.next;
        return true;
    }
    if (position === this.length - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    let index = 0;
    let current = this.head;
    while (index++ < position) {
        current = current.next;
    }
    let next = current.next;
    let prev = current.prev;
    prev.next = next;
    next.prev = prev;
    return true;
}

// 移除链表上某个元素
DoubleLinkedList.prototype.removeAt = function (item) {
    let index = this.indexOf(item);
    this.removeAt(index);
    return index;
}

// 判断链表是否为空
DoubleLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
}

// 返回链表元素个数
DoubleLinkedList.prototype.size = function () {
    return this.length;
}

// 以字符串形式展示链表内的所有元素
DoubleLinkedList.prototype.toString = function () {
    let str = '';
    let current = this.head;
    while (current) {
        str += current.item;
        current = current.next;
    }
    return str;
}
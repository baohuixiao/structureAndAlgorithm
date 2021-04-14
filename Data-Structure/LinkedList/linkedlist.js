/**
 * 使用JavaScript代码实现链表结构
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

function LinkedList() {
    this.head = null;
    this.length = 0;
}

function Node(item) {
    this.item = item;
    this.next = null;
}

//  在链表尾部添加元素
LinkedList.prototype.append = function (item) {
    let node = new Node(item);

    if (this.length === 0) {
        this.head = node;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.length += 1;
}

// 在链表的某个位置插入元素
LinkedList.prototype.insert = function (item, position) {
    let node = new Node(item);

    if (position < 0 || position > this.length) {
        return false;
    }

    if (position === 0) {
        node.next = this.head;
        this.head = node;
    } else {
        // let current = this.head.next;
        // let preItem = this.head;
        // let index = 0;
        // while (current.next) {
        //     if (index === position) {
        //         node.next = current;
        //         preItem.next = node;
        //         break
        //     }
        //     preItem = current;
        //     current = current.next;
        //     index++;
        // }
        let current = this.head;
        let prev = null;
        let index = 0;
        while (index++ < position) {
            prev = current;
            current = prev.next;
        }
        prev.next = node;
        node.next = current;
    }
    this.length++;
    return true;
}

// 获取链表对应位置的元素
LinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) {
        return false;
    }
    let index = 0;
    let current = this.head;
    while (index++ < position) {
        current = current.next;
    }
    return current.item;
}

// 获取某元素在链表中的索引
LinkedList.prototype.indexOf = function (item) {
    let current = this.head;
    let index = 0;
    while (current) {
        if (current.item === item) {
            return index;
        }
        index++;
        current = current.next;
    }
    return -1;

}

// 修改链表中某个位置上的某元素
LinkedList.prototype.update = function (item, position) {
    if (position < 0 || position >= this.length) return false;
    let index = 0;
    let current = this.head;
    while (index++ < position) {
        current = current.next;
    }
    current.item = item;
    return true;
}

// 移除链表中某个位置上的元素
LinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return false;
    this.length--;
    if (position === 0) {
        this.head = this.head.next;
        return true;
    }
    let current = this.head;
    let prev = null;
    let index = 0;
    while (index++ < position) {
        prev = current;
        current = current.next;
    }
    prev.next = current.next;
    return true;
}

// 移除链表中的某元素
LinkedList.prototype.remove = function (item) {
    let index = this.indexOf(item);
    this.removeAt(index);
    return index;
}

// 判断链表是否为空
LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
}

// 返回链表元素个数
LinkedList.prototype.size = function () {
    return this.length;
}

// 以字符串形式展示链表内的所有元素
LinkedList.prototype.toString = function () {
    let str = '';
    let current = this.head;
    while (current) {
        str += current.item;
        current = current.next;
    }
    return str;
}

let linkedlist = new LinkedList();
console.log(linkedlist.toString())
console.log(linkedlist.isEmpty())
console.log(linkedlist.size())
linkedlist.append('JavaScript');
linkedlist.append('Python');
console.log(linkedlist.toString())
console.log(linkedlist.isEmpty())
console.log(linkedlist.size())

// --------------- 反转单链表 ---------------
function reverLinkedList(head) {
    // 目前发现的最优实现
    if (head == null || head.next == null) {
        return head;
    }
    let newList = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newList;

    // 我的实现
    let current = head;
    if (!head) return head;
    let next = current.next;
    let prev = null;
    while (current) {
        current.next = prev;
        prev = current;
        current = next;
        if (!current) {
            break
        }
        next = current.next
    }
    return prev;
}
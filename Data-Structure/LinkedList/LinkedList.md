# 链表

#### 一、什么是链表

假设这么一个场景，一堆的人站在一起，**位置随机**，如果要将他们串联起来，我们只需要知道第一个人是谁就可以了，其余的每个人只需要记住自己后面一个是谁，最后一个人后面没人。由此便将所有人串联起来了，即使位置是随机的，也不用记住某个人处于第几个。回到链表这个数据结构，第一个人也就是头结点，最后一个人就是尾结点，其他人都是中间节点，它们的存储结构并不是连续的，也就像例子中人所站立的位置并不是按顺序的一样。它们本身除了需要存储相关数据外，还需要有一个特定的属性去存储下一个数据的地址，由此串联起来便形成了链表结构。

![01](https://user-images.githubusercontent.com/75166546/114643121-a7c57680-9d07-11eb-8d0a-b5cfb5dd629f.jpg)

#### 二、链表的相关操作

> 链表可进行的操作和数组相似
>
> 链表由于有next的特殊存在，在删除和插入时只需要通过改变next的指向即可完成

##### 插入操作

1. 在头部插入，只需将head指向新插入的节点，并将新节点的next指向原本head所指向的节点

![03](https://user-images.githubusercontent.com/75166546/114659920-01896900-9d27-11eb-8a9e-b7d302771875.gif)

2. 在尾部插入，将原本尾部的节点next指向新节点，新节点的next指向null

![01](https://user-images.githubusercontent.com/75166546/114659903-fa625b00-9d26-11eb-9dfe-b0eb0b2fab21.gif)

3. 在中间位置插入，插入位置的前一个节点的next指向当前节点，新插入节点的next指向该位置的后一个节点

![02](https://user-images.githubusercontent.com/75166546/114659911-fdf5e200-9d26-11eb-8204-d63d53aacb83.gif)

##### 删除操作

1. 删除尾部节点，只需将倒数第二个节点的next指向null即可

![04](https://user-images.githubusercontent.com/75166546/114659929-03ebc300-9d27-11eb-9278-5332b13dbabe.gif)

2. 中间位置删除，将需要删除节点的前一个节点的next指向需要删除节点的下一个节点

![05](https://user-images.githubusercontent.com/75166546/114659936-0817e080-9d27-11eb-9a3e-0d7dba5609ae.gif)

3. 删除头部节点，只需将head指向第二个节点即可

![06](https://user-images.githubusercontent.com/75166546/114659946-0c43fe00-9d27-11eb-91bc-ac5a7370eb3d.gif)

#### 三、用代码实现一个链表结构

```javascript
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
```



#### 四、什么是双向链表

顾名思义，双向链表相较单向链表多存了一个方向的指针，如下图，每个节点不仅存了下一个节点的地址还存了上一个节点的地址。和单向链表相比，双向链表还多了个tail指针，表示指向最后一个节点。

在上面的例子中，原本每个人只需记住后面的人是谁即可，现在每个人还需要记住前一个人是谁

双向链表的操作和单向链表的操作相似，相较于单向链表，多了一个prev指向需要处理，在这里就不多加赘述了

![02](https://user-images.githubusercontent.com/75166546/114643124-a8f6a380-9d07-11eb-82b9-7ae2f9da45a9.jpg)

#### 五、用代码实现一个双向链表结构

```
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
```

#### 六、链表结构与数组结构相比的优缺点

接下来将从增、删、改、查四个方面进行比较

* 新增：我们都知道数组是按顺序进行存储，如果在数组的开头新增一个元素，则需要将后面的元素都向后移动一位，最好的结果是在数组最后面新增，这样就不用进行多余的操作了。而链表就简单了许多，只需要改变几个相关节点的指向即可
* 删除：数组中删除一个节点，其他位置的节点顺序也会改变，如果删除头部节点，则后面的节点都需要向前移动一位，最好的结果就是删除最后一个节点。而链表只要改变几个相关节点的指向即可
* 查找：数组较为方便，每个节点都有相应的下标，可以快速查找。而链表则麻烦多了，需要顺着链表一个一个查找
* 修改：数组修改较为简单，在已知下标的情况下只需根据下标进行修改即可。链表更加麻烦，需要先进行查找

综上所述，如果你的数据只需新增、删除则选择链表结构更好。如果需要频繁的查找、修改，则选择数组结构更好
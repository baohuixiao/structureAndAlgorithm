# 集合(Set)

### 一、什么是集合

**集合**是一种包含着不同元素的数据结构，即在集合结构里，每一个元素都是独一无二的，互不相同，同时所有数据都是无序的

![01](https://user-images.githubusercontent.com/75166546/114691420-3fe44f80-9d4a-11eb-8275-7bfe7aaf5824.png)

其中，集合1和集合2同样存储着1234，但分布情况却不相同，这说明集合的无序性，而且集合1与集合2并不相等

### 二、集合分类

集合有几种特殊的分类，即并集、交集、差集，子集。其展示的是两个集合之间的关系

#### （1）交集

交集是由既属于集合1又属于集合2的元素组成的集合

![02](https://user-images.githubusercontent.com/75166546/114691427-41ae1300-9d4a-11eb-8cad-4f2b2cc81401.png)

集合1有：1 2 3 4

集合2有：1 2 4 5 8

所以既属于集合1，又属于集合2的1 2 4组成了新的集合，这个新的集合就是集合1和集合2的交集

#### （2）并集

并集：所有属于集合1和集合2的元素组成的集合

![03](https://user-images.githubusercontent.com/75166546/114691428-41ae1300-9d4a-11eb-8f54-9209f8fc515e.png)

集合1和集合2所有元素组合起来是1 2 3 4 5 8，组成的新的集合是集合1和集合2的并集

#### （3）差集

差集：差集就是属于集合1但不属于集合2的所有元素的集合

![04](https://user-images.githubusercontent.com/75166546/114691430-4246a980-9d4a-11eb-9d80-59c8926f0f09.png)

集合1中有数据 1 2 4

集合2中有 1 3 5 8

属于集合1不属于集合2的有2 4，它们组成新的集合，就是集合1和集合2的差集

#### （4）子集

子集：是判断属于集合1的元素是否也属于集合2

![05](https://user-images.githubusercontent.com/75166546/114691433-42df4000-9d4a-11eb-8885-b439fd6a6745.png)

集合1： 1 2 4

集合2:1 2 3 4 5 8

因为集合1中的所有元素同时也属于集合2，所以说集合1是集合2的子集

### 三、用代码实现集合

```javascript
	/**
 * 使用JavaScript代码实现集合结构
 * 
 * methods
 *  has 判断一个元素是否存在于集合中
 *  add  将一个数据添加到集合中
 *  delete  删除集合中的某个元素
 *  clear 清空集合中的所有元素
 *  size 返回集合内的元素个数
 *  values 返回集合内的所有元素，保存在数组中
 *  union 获取与另一个集合的并集
 *  intersect 获取与另一个集合的交集
 *  difference  获取与另一个集合的差集
 *  subset   判断是否为另一个集合的子集
 * 
 */

function Set() {
    /**
     * items用于存放集合中的元素，这里之所以使用对象存储而不是数组，
     * 是因为数组实现无重复数据很麻烦，需要遍历全部元素
     * 而对象就很方便，直接通过key就能获取到集合中是否已存在该数据
     */
    this.items = {}
}

// 判断集合中是否存在某数据
Set.prototype.has = function(value) {
    // hasOwnProperty() 是对象内置的方法，用来判断属性是否为对象自有属性
    return this.items.hasOwnProperty(value);
}

// 向集合中添加数据
Set.prototype.add = function(value) {
    if (this.has(value)) return false;

    this.items[value] = value;

    // 返回当前集合内容
    return this.items;
}

// 删除集合中指定元素
Set.prototype.delete = function(value) {
    if (!this.has(value)) return false;

    delete this.items[value];

    return true;
}

// 清空集合中的所有元素
Set.prototype.clear = function() {
    this.items = {};
}

// 返回集合内的元素个数
Set.prototype.size = function() {
    // Object.keys(obj) 方法是js中的内置方法，将obj的所有key存于数组中返回
    
    return Object.keys(this.items).length;
}

// 返回集合内的所有元素，保存在数组中
Set.prototype.values = function() {
    return Object.keys(this.items);
}

// 获取与另一个集合的并集
Set.prototype.union = function(otherSet) {
    // Object.assign(obj1, obj2) 是js内置的方法，将多个对象合并，相同属性，后面的覆盖之前的

    return Object.assign(this.items, otherSet);
}

// 获取与另一个集合的交集
Set.prototype.intersect = function(otherSet) {
    keys = Object.keys(otherSet);

    var intersect = {};

    for(var i = 0; i < keys.length; i += 1) {
        if (this.has(keys[i])) {
            intersect[keys[i]] = keys[i];
        }
    }

    return intersect;
}

// 获取与另一个集合的差集,在自己集合中，但不在对方集合中
Set.prototype.difference = function(otherSet) {
    var difference = {};
    var keys = Object.keys(this.items);

    for (var i = 0; i < keys.length; i += 1) {
        if (!otherSet.hasOwnProperty(keys[i])) {
            difference[keys[i]] = keys[i]
        }
    }

    return difference;
}

// 判断当前集合是否为另一个集合的子集
Set.prototype.subset = function(otherSet) {
    // 空集是除了空集之外的任意集合的子集

    var keys = Object.keys(this.items);

    for (var i = 0; i < keys.length; i += 1) {
        if (!otherSet.hasOwnProperty(keys[i])) {
            return false;
        }
    }
    return true;
}
```


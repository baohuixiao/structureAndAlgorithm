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
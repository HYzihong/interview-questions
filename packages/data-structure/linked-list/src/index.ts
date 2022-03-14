/*

push(element)：向链表尾部添加一个新元素。
insert(element, position)：向链表的 position 插入一个新元素。
getElementAt(index)：返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined。
remove(element)：从链表中移除一个元素。
indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回 -1。
removeAt(position)：从链表的 position 位置移除一个元素。
isEmpty()：返回链表是否为空。
size()：返回链表包含的元素个数。
toString()：返回表示整个链表的字符串。

在写 LinkedList 类之前，先写几个辅助的工具：

IEqualsFunction：自定义相等比较函数的 type；
defaultEquals：默认的相等比较函数；
Node：链表中的每个节点，有 element 和 next 两个属性；

*/
type LinkType<T> = {
  val: T;
  next: LinkType<T> | null;
};
class Linked<T> {
  val: T;
  next: LinkType<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList<T> {
  head: LinkType<T>;
  constructor(val: T) {
    this.head = new Linked(val);
  }
  /**
   * @description: 找到当前节点
   */
  find(item: T) {
    if (!this.head.next && this.head.val !== item) {
      return null;
    }
    let currentNode: LinkType<any> | null = this.head;
    while (currentNode && currentNode.val !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * @description: 找到前一个节点
   */
  findPre(item: T): any {
    let cur = this.head;
    while (cur.next !== null && cur.next.val !== item) {
      cur = cur.next;
    }
    return cur;
  }

  // 插入节点
  // el:要插入的数据
  // item：数据插入到这个节点后面
  insert(val: T, item: T) {
    const newNode = new Linked(val);
    const cur = this.find(item);
    if (cur) {
      newNode.next = cur.next;
      cur.next = newNode;
    }
  }

  // 删除节点
  remove(item: T) {
    const preNode = this.findPre(item);
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
      return true;
    }
    return false;
  }
}

let listNode = new LinkedList(0);
console.log(listNode);
listNode.insert(1, 0);
console.log(listNode);
console.log(listNode.find(1));
console.log(listNode.findPre(1));
console.log(listNode.remove(1));
console.log(listNode);

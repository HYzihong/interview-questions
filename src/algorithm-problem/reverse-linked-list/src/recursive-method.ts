type ListNodeType = {
  val: number;
  next: ListNodeType | null;
};
/**
 *  反转链表 - 递归方法篇
 * @param {ListNodeType} head
 * @return {ListNodeType} newHead
 */
function reverseListNode(head: ListNodeType | null): ListNodeType {
  // 判断节点是否为空或者是否只有头节点
  // if (head == null || head.next == null) {
  if (!head || !head.next) {
    return head;
  }
  // 生成的下一个节点，递归调用
  const newHead = reverseListNode(head.next);
  // 将当前节点的下一个节点(head.next)的下一个指针(next)指向当前节点，当前节点的下一个指针(next)指向null,也就是反转

  // 1->2->3->4->5
  // 1.next=2  ==> 1.next=null
  // 1.next.next=2.next=3 ==> 2.next=1

  // 2.next=3 ==> 2.next=null
  // 2.next.next=3.next=4 ==> 3.next=2

  head.next.next = head;
  // 头节点的下一个指针指向null
  head.next = null;
  return newHead;
}

export default reverseListNode;

import { ListNode } from "./listNode";

type ListNodeType = {
  val: number;
  next: ListNodeType | null;
};

/**
 * 反转链表 - 转数组在reduce生成链表
 * @see https://leetcode-cn.com/problems/reverse-linked-list/solution/js-san-chong-jie-fa-di-gui-wei-di-gui-die-dai-by-n/
 */
// TODO 要优化 type 定义
function reverseListNode(head: ListNodeType | null): ListNodeType | null {
  if (!head || !head.next) {
    return head;
  }
  let tempArr: number[] = [];
  while (head) {
    tempArr.push(head.val);
    head = head.next;
  }
  // return createList(tempArr.reverse());
  return tempArr.reduce((acc: ListNodeType | null, curr: number) => {
    return new ListNode(curr, acc);
  }, null);
}

export default reverseListNode;

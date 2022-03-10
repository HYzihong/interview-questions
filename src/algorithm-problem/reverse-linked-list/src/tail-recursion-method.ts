/*
 * @Author: hy
 * @Date: 2022-03-10 23:56:43
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-10 23:57:03
 * @FilePath: /interview-questions/src/algorithm-problem/reverse-linked-list/src/tail-recursion-method.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
type ListNodeType = {
  val: number;
  next: ListNodeType | null;
};
/**
 *  反转链表 - 尾递归法
 * @description 思路: 用 prev 和 curr 存储推进状态，直到 curr 为空则输出结果.
 * @param {ListNodeType} head
 * @return {ListNodeType} newHead
 */
function reverseListNode(head: ListNodeType | null): ListNodeType {
  return _reverse(null, head);
}

function _reverse(prev: ListNodeType | null, curr: ListNodeType | null) {
  if (!curr) return prev;
  let temp: ListNodeType | null = curr.next;
  curr.next = prev;
  return _reverse(curr, temp);
}

export default reverseListNode;

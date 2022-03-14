/*
 * @Author: hy
 * @Date: 2022-03-10 23:55:43
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-10 23:56:02
 * @FilePath: /interview-questions/src/algorithm-problem/reverse-linked-list/src/iterative-method.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
type ListNodeType = {
  val: number;
  next: ListNodeType | null;
};

/**
 *  反转链表 - 递归方法篇
 * @param {ListNodeType} head
 * @return {ListNodeType} newHead
 */
// TODO 要优化 type 定义
function reverseListNode(head: ListNodeType | null): ListNodeType | null {
  let prev: ListNodeType | null = null;
  let curr: ListNodeType | null = head; // current  value
  while (curr) {
    //
    // _next 暂存 当前节点的下一个节点
    const _next: ListNodeType | null = curr.next;
    // 当前节点的下一个节点 = 上一个节点的值
    curr.next = prev;
    // 下一次的上一个节点 prev = 当前节点
    prev = curr;
    // 下一次的当前节点 = 当前节点的下一个节点
    curr = _next;

    // 简写
    // [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
}

// _next = 2
// 1.next = null
// prev = 1
// curr = 2

// _next = 3
// 2.next = 1
// prev = 2
// curr = 3

// _next = 4
// 3.next = 2
// prev = 3
// curr = 4

export default reverseListNode;

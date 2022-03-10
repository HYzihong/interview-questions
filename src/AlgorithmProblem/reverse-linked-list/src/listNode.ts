/*
 * @Author: hy
 * @Date: 2022-03-09 23:04:47
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-11 00:28:10
 * @FilePath: /interview-questions/src/AlgorithmProblem/reverse-linked-list/src/listNode.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

type ListNodeType = {
  val: number;
  next: ListNodeType | null;
};

// function ListNode(val: number, next?: ListNodeType) {
//   // @ts-ignore
//   this.val = val == undefined ? 0 : val;
//   // @ts-ignore
//   this.next = next == undefined ? null : next;
// }

export class ListNode {
  public val: number;
  public next: ListNodeType | null;
  constructor(val: number, next?: ListNodeType | null) {
    this.val = val == undefined ? 0 : val;
    this.next = next == undefined ? null : next;
    // this.val = val;
    // this.next = next;
  }
}

/**
 * 创建链表
 * @param {number[]} arr 字符串数组
 */
function createList(arr: number[]): ListNodeType {
  let head: ListNodeType = new ListNode(arr[0]);
  let tail: ListNodeType = head;
  for (let i = 1; i <= arr.length - 1; i++) {
    tail.next = new ListNode(arr[i]);
    tail = tail.next;
  }
  return head;
}

// console.log(createList([1, 2]));
// console.log(createList([]));

// let node: ListNodeType = { val: 1, next: { val: 2, next: null } };

export default createList;

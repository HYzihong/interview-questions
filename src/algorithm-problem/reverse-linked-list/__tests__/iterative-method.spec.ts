/*
 * @Author: hy
 * @Date: 2022-03-10 23:52:34
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-10 23:52:58
 * @FilePath: /interview-questions/src/algorithm-problem/reverse-linked-list/__tests__/iterative-method.spec.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import createList from "../src/listNode";
import reverseListNode from "../src/iterative-method";

describe("algorithm problem - reverse linked list :", () => {
  test(" reverse ListNode by iterative method ", async () => {
    const oldListNode = createList([1, 2, 3, 4, 5]);
    const newListNode = createList([5, 4, 3, 2, 1]);
    expect(reverseListNode(oldListNode)).toStrictEqual(newListNode);
  });
});

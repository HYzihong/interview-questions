/*
 * @Author: hy
 * @Date: 2022-03-11 00:23:12
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-11 00:24:23
 * @FilePath: /interview-questions/src/AlgorithmProblem/reverse-linked-list/__tests__/tail-recursion-method.spec.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import createList from "../src/listNode";
import reverseListNode from "../src/tail-recursion-method";

describe("algorithm problem - reverse linked list :", () => {
  test(" reverse ListNode by tail recursion method ", async () => {
    const oldListNode = createList([1, 2, 3, 4, 5]);
    const newListNode = createList([5, 4, 3, 2, 1]);
    expect(reverseListNode(oldListNode)).toStrictEqual(newListNode);
  });
});

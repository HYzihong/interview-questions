/*
 * @Author: hy
 * @Date: 2022-03-09 23:37:45
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-10 00:14:57
 * @FilePath: /interview-questions/src/algorithm-problem/reverse-linked-list/__tests__/createListNode.spec.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import createList from "../src/listNode";

type ListNodeType = {
  val: number;
  next: ListNodeType;
};
describe("algorithm problem - reverse linked list :", () => {
  test(" create ListNode", async () => {
    expect(createList([1, 2])).toBe({
      val: 1,
      next: { val: 2, next: null },
    } as ListNodeType);
  });
});

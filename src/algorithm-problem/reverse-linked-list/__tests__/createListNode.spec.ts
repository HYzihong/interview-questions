/*
 * @Author: hy
 * @Date: 2022-03-09 23:37:45
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-03-11 00:08:20
 * @FilePath: /interview-questions/src/algorithm-problem/reverse-linked-list/__tests__/createListNode.spec.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import createList from "../src/listNode";

// type ListNodeType = {
//   val: number;
//   next: ListNodeType | null;
// };

describe("algorithm problem - reverse linked list :", () => {
  test(" create ListNode [val:1,next:{val:2,next:{val:3:next:null}}]", async () => {
    /*
    expect(createList([1, 2])).toEqual({
      val: 1,
      next: { val: 2, next: null },
    }as ListNodeType);
    加上 as ListNodeType 会报错
     Conversion of type '{ val: number; next: { val: number; next: null; }; }' to type 'ListNodeType' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
      The types of 'next.next' are incompatible between these types.
      Type 'null' is not comparable to type 'ListNodeType'.
    */
    expect(createList([1, 2])).toEqual({
      val: 1,
      next: { val: 2, next: null },
    });
  });
  test("create ListNode []", async () => {
    expect(createList([])).toEqual({ val: 0, next: null });
  });
});

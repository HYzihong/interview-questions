import createList from "../src/listNode";
import reverseListNode from "../src/recursive-method";
describe("algorithm problem - reverse linked list :", () => {
  test(" reverse ListNode by recursive method ", async () => {
    const oldListNode = createList([1, 2, 3, 4, 5]);
    const newListNode = createList([5, 4, 3, 2, 1]);
    /*
    使用 toEqual会报错 ：Property 'toEqual' does not exist on type 'ListNodeType'.
    提示可以用 toStrictEqual 代替
    
    .toStrictEqual(value)// @see by https://runebook.dev/zh-CN/docs/jest/expect#tostrictequalvalue
    使用 .toStrictEqual 来测试对象具有相同的类型和结构。

    与 .toEqual 的区别：

    检查具有 undefined 属性的键。例如 {a: undefined, b: 2} 当使用 .toStrictEqual 时，{a：undefined，b：2}与 {b: 2} 不匹配。
    检查数组稀疏性。例如 [, 1] 当使用 .toStrictEqual 时 [undefined, 1] [，1]与[undefined，1]不匹配。
    检查对象类型是否相等。例如，具有字段 a 和 b 的类实例将不等于具有字段 a 和 b 的文字对象。
    */
    expect(reverseListNode(oldListNode)).toStrictEqual(newListNode);
  });
});

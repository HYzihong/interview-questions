/*
 * @Author: hy
 * @Date: 2022-05-08 14:21:01
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-08 22:16:23
 * @FilePath: /interview-questions/packages/algorithm-problem/maximum-depth-of-binary-tree/src/treeNode.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */


export function creatTreeList(data: any[]): TreeList<number> {
  let tree: TreeList<number> = new TreeList()
  data.forEach((item: number | null) => {
    if (item) tree.insert(item)
  })
  return tree
}

console.log(creatTreeList([[3, 9, 20, null, null, 15, 7]]));

// TODO 实现有问题，我建议TDD实现
export class TreeNode<T> {
  // val: number
  // key: number
  // isVisted: boolean //是否访问过
  public left: TreeNode<T> | null// 左侧子节点
  public right: TreeNode<T> | null// 右侧子节点
  public parent: TreeNode<T> | null;
  // constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
  //   this.val = (val === undefined ? 0 : val)
  //   this.left = (left === undefined ? null : left)
  //   this.right = (right === undefined ? null : right)
  // }
  constructor(public key: T, parent?: TreeNode<T> | null) {
    this.left = null;
    this.right = null;
    this.parent = parent ? parent : null;
    /*
    this.parent = parent
    会报错：
    Type 'TreeNode<T> | null | undefined' is not assignable to type 'TreeNode<T> | null'.
  Type 'undefined' is not assignable to type 'TreeNode<T> | null'
    */
  }

  toString(): string {
    return `${this.key}`;
  }
}


export class TreeList<T> {
  protected root: TreeNode<T> | null
  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    this.root = null;
  }
  insert(key: T): void {
    if (this.root === null) {
      // 如果根节点不存在则直接新建一个节点
      this.root = new TreeNode(key);
    } else {
      // 在根节点中找合适的位置插入子节点
      this.insertNode(this.root, key);
    }
  }

  // 节点插入
  protected insertNode(node: TreeNode<T>, key: T): void {
    // 新节点的键小于当前节点的键，则将新节点插入当前节点的左边
    // 新节点的键大于当前节点的键，则将新节点插入当前节点的右边
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        // 当前节点的左子树为null直接插入
        node.left = new TreeNode(key, node);
      } else {
        // 从当前节点(左子树)向下递归,找到null位置将其插入
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        // 当前节点的右子树为null直接插入
        node.right = new TreeNode(key, node);
      } else {
        // 从当前节点(右子树)向下递归，找到null位置将其插入
        this.insertNode(node.right, key);
      }
    }
  }

  // 中序遍历
  inOrderTraverse(callback: callbackFn<T>): void {
    this.inOrderTraverseNode(this.root, callback);
  }

  // 按顺序遍历节点
  private inOrderTraverseNode(node: TreeNode<T>, callback: callbackFn<T>) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  // 先序遍历
  preOrderTraverse(callback: callbackFn<T>): void {
    this.preOrderTraverseNode(this.root, callback);
  }

  // 先序遍历结点
  private preOrderTraverseNode(node: TreeNode<T>, callback: callbackFn<T>): void {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  // 后序遍历
  postOrderTraverse(callback: callbackFn<T>): void {
    this.postOrderTraverseNode(this.root, callback);
  }

  // 后序遍历节点
  private postOrderTraverseNode(node: TreeNode<T>, callback: callbackFn<T>): void {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  // 获取最小值
  min(): TreeNode<T> {
    return this.minNode(this.root);
  }

  // 树的最小节点
  protected minNode(node: TreeNode<T>): TreeNode<T> {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  // 获取最大值
  max(): TreeNode<T> {
    return this.maxNode(this.root);
  }

  // 树的最大节点
  private maxNode(node: TreeNode<T>) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  // 搜索特定值
  search(key: T): boolean | TreeNode<T> {
    return this.searchNode(this.root, key);
  }

  // 搜索节点
  private searchNode(node: TreeNode<T>, key: T): boolean | TreeNode<T> {
    if (node == null) {
      return false;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 要查找的key在节点的左侧
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 要查找的key在节点的右侧
      return this.searchNode(node.right, key);
    } else {
      // 节点已找到
      return node;
    }
  }

  // 删除节点函数
  remove(key: T): void {
    this.removeNode(this.root, key);
  }
  // 删除节点
  protected removeNode(node: TreeNode<T> | null, key: T): null | TreeNode<T> {
    // 正在检测的节点为null，即键不存在于树中
    if (node == null) {
      return null;
    }

    // 不为null,需要在树中找到要移除的键
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 目标key小于当前节点的值则沿着树的左边找
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 目标key大于当前节点的值则沿着树的右边找
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 键等于key,需要处理三种情况
      if (node.left == null && node.right == null) {
        // 移除一个叶节点,即该节点没有左、右子节点
        // 将节点指向null来移除它
        node = null;
        return node;
      }

      if (node.left == null) {
        // 移除一个左侧子节点的节点
        // node有一个右侧子节点，因此需要把对它的引用改为对它右侧子节点的引用
        node = node.right;
        // 返回更新后的节点
        return node;
      } else if (node.right == null) {
        // 移除一个右侧子节点的节点
        // node有一个左侧子节点，因此需要把对它的引用改为对它左侧子节点的引用
        node = node.left;
        // 返回更新后的节点
        return node;
      }

      // 移除有两个子节点的节点
      const aux = this.minNode(node.right); // 当找到了要移除的节点后,需要找到它右边子树最小的节点,即它的继承者
      node.key = aux.key; // 用右侧子树最小的节点的键去更新node的键
      // 更新完node的键后，树中存在了两个相同的键，因此需要移除多余的键
      node.right = this.removeNode(node.right, aux.key); // 移除右侧子树中的最小节点
      return node; // 返回更新后的节点
    }
  }


}

// utils

interface callbackFn<T> {
  (val: T): void;
}

// 定义比对函数的参数类型以及返回值类型
export type ICompareFunction<T> = (a: T, b: T) => number;


// 默认的比对函数: 比对参数a和参数b的大小返回其相应的枚举值
export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS;
  } else if (a > b) {
    return Compare.BIGGER_THAN;
  } else {
    return Compare.LESS_THAN;
  }
}


// 枚举类：定义比对返回值
export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0
}

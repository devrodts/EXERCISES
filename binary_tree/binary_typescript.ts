// tree.ts
export class Node {
    constructor(
      public val: number,
      public left: Node | null = null,
      public right: Node | null = null
    ) {}
  }
  
  export function treeHeight(root: Node | null): number {
    if (!root) return 0;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
  }
  
  export function levelOrder(root: Node | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;
    const q: Node[] = [root];
    while (q.length) {
      const sz = q.length;
      const lvl: number[] = [];
      for (let i = 0; i < sz; i++) {
        const n = q.shift()!;
        lvl.push(n.val);
        if (n.left) q.push(n.left);
        if (n.right) q.push(n.right);
      }
      res.push(lvl);
    }
    return res;
  }
  
  function swapAtDepth(node: Node | null, k: number, depth = 1): void {
    if (!node) return;
    if (depth % k === 0) {
      [node.left, node.right] = [node.right, node.left];
    }
    swapAtDepth(node.left, k, depth+1);
    swapAtDepth(node.right, k, depth+1);
  }
  
  export function swapNodes(root: Node | null, k: number): number[] {
    swapAtDepth(root, k);
    const res: number[] = [];
    function inorder(n: Node | null) {
      if (!n) return;
      inorder(n.left);
      res.push(n.val);
      inorder(n.right);
    }
    inorder(root);
    return res;
  }
  
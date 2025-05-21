class Node {
    constructor(val, left=null, right=null){
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  function treeHeight(root) {
    if (!root) return 0;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
  }

  function levelOrder(root) {
    const res = [];
    if (!root) return res;
    const q = [root];
    while (q.length) {
      const sz = q.length, lvl = [];
      for (let i=0;i<sz;i++){
        const n = q.shift();
        lvl.push(n.val);
        if (n.left) q.push(n.left);
        if (n.right) q.push(n.right);
      }
      res.push(lvl);
    }
    return res;
  }

  function swapAtDepth(node,k,depth=1){
    if(!node)return;
    if(depth%k===0) [node.left, node.right] = [node.right, node.left];
    swapAtDepth(node.left,k,depth+1);
    swapAtDepth(node.right,k,depth+1);
  }

  function swapNodes(root,k){
    swapAtDepth(root,k);
    const res = [];
    function inorder(n){
      if(!n) return;
      inorder(n.left);
      res.push(n.val);
      inorder(n.right);
    }
    inorder(root);
    return res;
  }
  
  module.exports = { Node, treeHeight, levelOrder, swapNodes };
  
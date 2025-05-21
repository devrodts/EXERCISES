
from collections import deque
from typing import Optional, List

class Node:
    def __init__(self, val: int, left: 'Node'=None, right: 'Node'=None):
        self.val = val
        self.left = left
        self.right = right

def tree_height(root: Optional[Node]) -> int:
    if not root: return 0
    return 1 + max(tree_height(root.left), tree_height(root.right))

def level_order(root: Optional[Node]) -> List[List[int]]:
    res = []
    if not root: return res
    q = deque([root])
    while q:
        sz = len(q)
        lvl = []
        for _ in range(sz):
            n = q.popleft()
            lvl.append(n.val)
            if n.left: q.append(n.left)
            if n.right: q.append(n.right)
        res.append(lvl)
    return res

def swap_nodes(root: Optional[Node], k: int) -> List[int]:
    def swap_at_depth(node, depth=1):
        if not node: return
        if depth % k == 0:
            node.left, node.right = node.right, node.left
        swap_at_depth(node.left, depth+1)
        swap_at_depth(node.right, depth+1)
    swap_at_depth(root)
    out = []
    def inorder(n):
        if not n: return
        inorder(n.left)
        out.append(n.val)
        inorder(n.right)
    inorder(root)
    return out

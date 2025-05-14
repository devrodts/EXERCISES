

#[derive(Debug, PartialEq, Eq)]
pub struct Node{
    pub val: i32,
    pub left: Option<Box<Node>>,
    pub right: Option<Box<Node>>,
}

impl Node{
    pub fn new(val: i32) -> Self{
        Node{
            val,
            left: None,
            right: None,
        }
    }
}

pub fn tree_height(root: &Option<Box<Node>>) -> usize{
    match root{
       Node => 0,
       Some(node) => 1 + tree_height(&node.left).max(tree_height(&node.right)),
    }
}

fn pub level_order_traversal(root: &Option<Box<Node>>) -> Vec<Vec<i32>>{
    let mut result = Vec::new();
    let mut queue = VecDeque::new();
    if let Some(node) = root{
        queue.push_back(node);
    }
    while !queue.is_empty(){
        let level_size = queue.len();
        let mut level_values = Vec::new();
        for _ in 0..level_size{
            let node = queue.pop_front().unwrap();
        }
        return result;
    }
    result
}



fn swap_at_depth(node: &mut Option<Box<Node>>, k: usize, depth: usize) {
    if let Some(nd) = node {
        if depth % k == 0 {
            let tmp = nd.left.take();
            nd.left = nd.right.take();
            nd.right = tmp;
        }
        swap_at_depth(&mut nd.left, k, depth+1);
        swap_at_depth(&mut nd.right, k, depth+1);
    }
}

pub fn swap_nodes(root: &mut Option<Box<Node>>, k: usize) -> Vec<i32> {
    swap_at_depth(root, k, 1);
    let mut res = vec![];
    fn inorder(n: &Option<Box<Node>>, out: &mut Vec<i32>) {
        if let Some(nd) = n {
            inorder(&nd.left, out);
            out.push(nd.val);
            inorder(&nd.right, out);
        }
    }
    inorder(root, &mut res);
    res
}


#[cfg(test)]
mod tests {
    use super::*;
    fn build_sample() -> Option<Box<Node>> {
        //    1
        //   / \
        //  2   3
        // / \
        //4   5
        let mut n1 = Box::new(Node::new(1));
        let mut n2 = Box::new(Node::new(2));
        n2.left = Some(Box::new(Node::new(4)));
        n2.right = Some(Box::new(Node::new(5)));
        n1.left = Some(n2);
        n1.right = Some(Box::new(Node::new(3)));
        Some(n1)
    }

    #[test]
    fn test_tree_height() {
        let t = build_sample();
        assert_eq!(tree_height(&t), 3);
    }

    #[test]
    fn test_level_order() {
        let t = build_sample();
        assert_eq!(level_order(&t), vec![vec![1], vec![2,3], vec![4,5]]);
    }

    #[test]
    fn test_swap_nodes() {
        let mut t = build_sample();
        let res = swap_nodes(&mut t, 2);
        // profundidade 2 → troca filhos de 2 e de 3
        assert_eq!(res, vec![5,2,4,1,3]);
    }
}
package binary_tree.java;
import java.util.*;
public class Main{

    public class Node{
        public int val;
        public Node left;
        public Node right;

        public Node(int val){
            this.val = val;
        }
    }

    public class TreeAlgos {
        public static int treeHeight(Node root) {
            if (root == null) return 0;
            return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
        }
    
        public static List<List<Integer>> levelOrder(Node root) {
            List<List<Integer>> res = new ArrayList<>();
            if (root == null) return res;
            Queue<Node> q = new LinkedList<>();
            q.add(root);
            while (!q.isEmpty()) {
                int sz = q.size();
                List<Integer> lvl = new ArrayList<>();
                for (int i = 0; i < sz; i++) {
                    Node n = q.poll();
                    lvl.add(n.val);
                    if (n.left != null) q.add(n.left);
                    if (n.right != null) q.add(n.right);
                }
                System.out.println(lvl);
                res.add(lvl);
            }
            return res;
        }
    
        private static void swapAtDepth(Node node, int k, int depth) {
            if (node == null) return;
            if (depth % k == 0) {
                Node tmp = node.left;
                node.left = node.right;
                node.right = tmp;
            }
            swapAtDepth(node.left, k, depth+1);
            swapAtDepth(node.right, k, depth+1);
        }
    
        public static List<Integer> swapNodes(Node root, int k) {
            swapAtDepth(root, k, 1);
            List<Integer> res = new ArrayList<>();
            inorder(root, res);
            return res;
        }
    
        private static void inorder(Node n, List<Integer> out) {
            if (n == null) return;
            inorder(n.left, out);
            out.add(n.val);
            inorder(n.right, out);
        }
    }
}

# test_tree.py
import pytest
from tree import Node, tree_height, level_order, swap_nodes

@pytest.fixture
def sample():
    #    1
    #   / \
    #  2   3
    # / \
    #4   5
    n1 = Node(1)
    n2 = Node(2, Node(4), Node(5))
    n1.left = n2
    n1.right = Node(3)
    return n1

def test_tree_height(sample):
    assert tree_height(sample) == 3

def test_level_order(sample):
    assert level_order(sample) == [[1], [2,3], [4,5]]

def test_swap_nodes(sample):
    assert swap_nodes(sample, 2) == [5,2,4,1,3]

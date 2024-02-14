/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.isEmpty()) return 0;
    const queue = [{ node: this.root, depth: 1 }];

    while (queue.length) {
      const { node, depth } = queue.shift();
      
      if (!node.left && !node.right) {
        return depth;
      }
      
      if (node.left) {
        queue.push({ node: node.left, depth: depth + 1 });
      }

      if (node.right) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const calcDepth = (node) => {
      if (!node) return 0;
      return  1 + Math.max(calcDepth(node.left), calcDepth(node.right));
    };
    
    return calcDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const  calcMaxSum = (node) => {
      if (!node) return 0;
      const leftSum = Math.max(calcMaxSum(node.left), 0);
      const rightSum = Math.max(calcMaxSum(node.right), 0);
      const currSum = node.val + leftSum + rightSum;

      maxSum = Math.max(maxSum, currSum);
      return node.val + Math.max(leftSum, rightSum);
    };

    let maxSum = Number.NEGATIVE_INFINITY;
    calcMaxSum(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const traverseTree = (node, lowerBound, closestValue) => {
      if (!node) return closestValue;

      if (node.val > lowerBound) {
        if (closestValue === null || node.val < closestValue) {
          closestValue = node.val;
        }
      }
      closestValue = traverseTree(node.left, lowerBound, closestValue);
      closestValue = traverseTree(node.right, lowerBound, closestValue);
      return closestValue;
      };

    return traverseTree(this.root, lowerBound, null);
    }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

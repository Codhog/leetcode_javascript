// DFS
var maxDepth = function(root) {
    if(!root) return 0
    if(!root.left) return maxDepth(root.right) + 1
    if(!root.right) return maxDepth(root.left) + 1
    return Math.max(maxDepth(root.right), maxDepth(root.left))+1
};

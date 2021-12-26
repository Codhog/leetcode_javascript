/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//  var minDepth = function(root) {
//      console.log(null===true);
//     if(!root)return 0

//     if(root.left===null) return minDepth(root.right)
//     if(root.right===null) return minDepth(root.left)

//     return Math.min(minDepth(root.left), minDepth(root.right)) + 1
// };
// var minDepth = function(root) {
//     if (!root) return [];
    
//     let queue = [root];
//     let depth = 1;
    
//     while (queue[0]) {
//         let size = queue.length;
        
//         while (size--) {
//             let curr = queue.shift(); // dequeue
//             if (!curr.left && !curr.right) return depth;
            
//             if (curr.left) queue.push(curr.left); // enqueue
//             if (curr.right) queue.push(curr.right); // enqueue
//             console.log(queue);
//         }
        
//         depth++;
//     }
// };
// console.log(minDepth([2,null,3,null,4,null,5,null,6]));

// for(let i=0;i<4;i++){
//     if(i===2)continue
//     console.log(i);
// }

console.log(typeof [1, 0]+[1,1]);
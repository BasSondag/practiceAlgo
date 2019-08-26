var rangeSumBST = function(root, L, R) {
    let result = 0;
    function travers(node){
        console.log("in travers", node)
        if (node === null) {
            return;
        }
        if(node.value >= L && node.value <= R) {
          result += node.value;
        }
        travers(node.left)
        travers(node.right)
    }
    console.log(root.value)
    travers(root)
    return result;
};

let myTree = [10,5,15,3,7,null,18]
let L =7, R =15;

// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// DO NOT EDIT
// generate tree from array
function deserialize(arr) {
  if (arr.length === 0) { return null; }
  let root = new TreeNode(arr[0]);
  let queue = [root];
  for(let i = 1; i < arr.length; i += 2) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      current.right = new TreeNode(arr[i + 1]);
      queue.push(current.right);
    }
  }
  return root;
}
myTree = deserialize(myTree)
console.log(myTree.value)
console.log(rangeSumBST(myTree, L, R))

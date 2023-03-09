const maxSumPath = (root) => {
    let maxSum = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        const left = Math.max(dfs(node.left), 0);
        const right = Math.max(dfs(node.right), 0);

        maxSum = Math.max(maxSum, node.val + left + right);

        return node.val + Math.max(left, right);
    }

    dfs(root);

    return maxSum === -Infinity ? 0 : maxSum;
};


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//     1
//    / \
//   2   3
//  / \ / \
// 4  5 6  7


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(maxSumPath(root)); // 18

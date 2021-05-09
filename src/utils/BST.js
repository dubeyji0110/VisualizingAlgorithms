class Node {
    constructor(data) {
        this.right = null;
        this.left = null;
        this.data = data;
    }
}

class BST {
	insertSortedArray(arr, start, end) {
		if (arr == null || arr.length === 0 || start > end) {
			return null;
		}
		let mid = (start + end) / 2;
		let root = new Node(arr[mid]);
		root.left = this.insertSortedArray(arr, start, mid - 1);
		root.right = this.insertSortedArray(arr, mid + 1, end);
		return root;
	}

	preOrder(root) {
		const finalData = [];
		function traverse(node) {
			finalData.push(node.data);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(root);
		return finalData;
	}

	postOrder(root) {
		const finalData = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			finalData.push(node.data);
		}

		traverse(root);
		return finalData;
	}

	inOrder(root) {
		const finalData = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			finalData.push(node.data);
			if (node.right) traverse(node.right);
		}

		traverse(root);
		return finalData;
	}

	bfs(root) {
		let node = root;
		const queue = [node];
		const finalData = [];
		while (queue.length) {
			node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			finalData.push(node.data);
		}

		return finalData;
	}
}

export default BST;
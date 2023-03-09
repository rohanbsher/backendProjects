interface Tree {
	x: number;
	y: number;
	length: number;
	angle: number;
	branchWidth: number;
	color: string;
	depth: number;
	maxDepth: number;
}

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");

const maxDepth = 12;
const branchWidth = 10;

function drawTree(tree: Tree) {
	if (context) {
		context.beginPath();
		context.save();
		context.strokeStyle = tree.color;
		context.lineWidth = tree.branchWidth;
		context.translate(tree.x, tree.y);
		context.rotate((Math.PI / 180) * tree.angle);
		context.moveTo(0, 0);
		context.lineTo(0, -tree.length);
		context.stroke();
	}

	tree.depth++;

	if (tree.depth <= tree.maxDepth) {
		const branchAngle = 20;
		const leftBranch = {
			x: 0,
			y: -tree.length,
			length: tree.length * 0.7,
			angle: tree.angle - branchAngle,
			branchWidth: tree.branchWidth * 0.9,
			color: "green",
			depth: tree.depth,
			maxDepth: tree.maxDepth,
		};

		const rightBranch = {
			x: 0,
			y: -tree.length,
			length: tree.length * 0.7,
			angle: tree.angle + branchAngle,
			branchWidth: tree.branchWidth * 0.7,
			color: "blue",
			depth: tree.depth,
			maxDepth: tree.maxDepth,
		};

		drawTree(leftBranch);
		drawTree(rightBranch);
	}

	context!.restore();
}

const tree = {
	x: window.innerWidth / 2,
	y: window.innerHeight - 50,
	length: 120,
	angle: 0,
	branchWidth,
	color: "red",
	depth: 0,
	maxDepth,
};

drawTree(tree);

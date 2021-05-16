import { Button } from "@material-ui/core";
import React from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import BST from "../utils/BST";
import { getRandomInt, timeout } from "../utils/functions";

// function BSTcomp() {

// 	const bst = new BST();
// 	const [elements, setElements] = useState([]);
// 	const [arrangedElements, setArrangedElements] = useState([]);
// 	const [root, setRoot] = useState(null);
// 	const [colorList, setColorList] = useState([
// 		"beige",
// 		"beige",
// 		"beige",
// 		"beige",
// 		"beige",
// 		"beige",
// 		"beige",
// 	]);
// 	const [findElement, setFindElement] = useState(0);
// 	const [delay, setDelay] = useState(700);
// 	const [traversal, setTraversal] = useState("preOrder");
// 	const [deactivate, setDeactivate] = useState(false);

// 	useEffect(() => {
// 		addElements();
// 	}, []);

// 	const createTree = () => {
// 		let root1 = bst.insertSortedArray(elements, 0, elements.length - 1);
// 		let arrElements = bst.preOrder(root1);

// 		setArrangedElements(arrElements);
// 		setRoot(root1);
// 	};

// 	const addElements = () => {
// 		let ele = [];
// 		for (let i = 0; i < 7; i++){
// 			let n = Math.round(getRandomInt(1, 99));
// 			ele.push(n);
// 		}
// 		ele = ele.sort();
// 		setElements(ele);
// 	};

// 	return (
// 		<div className='container1'>
// 			<div className='left'>
// 				<div className='container-plate1' style={{width: "100%"}}>
// 					<div className='root'>
// 						<div
// 							className='Node'
// 							style={{
// 								backgroundColor: colorList[0],
// 							}}>
// 							{arrangedElements[0]}
// 						</div>
// 					</div>
// 					<div className='connector'>
// 						<hr
// 							style={{
// 								borderWidth: "2px",
// 								borderColor: "#48494a",
// 								width: "146px",
// 								transform: "rotate(-28deg)",
// 								zIndex: "-10",
// 								marginLeft: "181px",
// 							}}></hr>
// 						<hr
// 							style={{
// 								borderWidth: "2px",
// 								borderColor: "#48494a",
// 								width: "146px",
// 								transform: "rotate(28deg)",
// 								zIndex: "10",
// 								marginLeft: "359px",
// 								marginTop: "-19px",
// 							}}></hr>
// 					</div>

// 					<div className='depth1'>
// 						<div
// 							className='Node'
// 							style={{
// 								backgroundColor: colorList[1],
// 							}}>
// 							{arrangedElements[1]}
// 						</div>
// 						<div
// 							className='Node'
// 							style={{
// 								backgroundColor: colorList[4],
// 							}}>
// 							{arrangedElements[4]}
// 						</div>
// 					</div>
// 					<div className='connector'>
// 						<hr
// 							style={{
// 								borderWidth: "2px",
// 								borderColor: "#48494a",
// 								width: "113px",
// 								transform: "rotate(-60deg)",
// 								zIndex: "-10",
// 								marginLeft: "70px",
// 								marginTop: "43px",
// 							}}></hr>
// 						<hr
// 							style={{
// 								borderWidth: "2px",
// 								borderColor: "#48494a",
// 								width: "115px",
// 								transform: "rotate(60deg)",
// 								zIndex: "-10",
// 								marginLeft: "163px",
// 								marginTop: "-22px",
// 							}}></hr>
// 						<hr
// 							style={{
// 								borderWidth: "2px",
// 								borderColor: "#48494a",
// 								width: "114px",
// 								transform: "rotate(60deg)",
// 								zIndex: "-10",
// 								marginLeft: "503px",
// 								marginTop: "-15px",
// 							}}></hr>
// 						<hr
// 							style={{
// 								borderWidth: "2px",
// 								borderColor: "#48494a",
// 								width: "117px",
// 								transform: "rotate(-60deg)",
// 								zIndex: "-10",
// 								marginTop: "-22px",
// 								marginLeft: "405px"
// 							}}></hr>
// 					</div>
// 					<div className='depth2'>
// 						<div
// 							className='Node'
// 							style={{
// 								backgroundColor: colorList[2],
// 							}}>
// 							{arrangedElements[2]}
// 						</div>
// 						<div
// 							className='Node'
// 							style={{
// 								backgroundColor: colorList[3],
// 							}}>
// 							{arrangedElements[3]}
// 						</div>
// 						<div
// 							className='Node'
// 							style={{
// 								backgroundColor: colorList[5],
// 							}}>
// 							{arrangedElements[5]}
// 						</div>
// 						<div
// 							className='Node'
// 							style={{
// 								backgroundColor: colorList[6],
// 							}}>
// 							{arrangedElements[6]}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='right'>
// 				<div className="rightUp">
// 					<Button type='Button' className='btn' disabled={deactivate} onClick={addElements}>Generate Random Tree</Button>
// 				</div>
// 				<div className="rightDown"></div>
// 				<div className="sort"></div>
// 			</div>
// 		</div>
// 	);
// }

class BSTcomp extends React.Component {
	bst = new BST();
	state = {
		elements: [],
		arrangedElements: [],
		root: null,
		colorList: [
			"beige",
			"beige",
			"beige",
			"beige",
			"beige",
			"beige",
			"beige",
		],
		findElement: 0,
		delay: 700,
		traversal: "preOrder",
		deactivate: false,
	};

	showSpeed = () => {
		if (this.state.delay === 1000) {
			return "Slow";
		} else if (this.state.delay === 700) {
			return "Medium";
		} else {
			return "Fast";
		}
	};

	createTree = () => {
		let root = this.bst.insertSortedArray(
			this.state.elements,
			0,
			this.state.elements.length - 1
		);

		let arrElements = this.bst.preOrder(root);

		this.setState({ arrangedElements: arrElements }, () => {
			this.setState({ root });
		});
	};

	componentWillMount() {
		this.addElements();
	}

	addElements = () => {
		let ele = [];
		for (let i = 0; i < 7; i++) {
			let n = Math.round(getRandomInt(1, 99));
			ele.push(n);
		}

		ele = ele.sort();

		this.setState({ elements: ele }, () => this.createTree());
	};

	changeTraversal = (traversal) => {
		this.setState({ traversal: traversal });
	};

	getAnswer = () => {
		if (this.state.traversal === "preOrder")
			return this.bst.preOrder(this.state.root);
		else if (this.state.traversal === "postOrder")
			return this.bst.postOrder(this.state.root);
		else if (this.state.traversal === "inOrder")
			return this.bst.inOrder(this.state.root);
		else return this.bst.bfs(this.state.root);
	};

	quickChangeColor = (ele, color) => {
		let index = 0;
		for (let i = 0; i < this.state.arrangedElements.length; i++) {
			if (ele === this.state.arrangedElements[i]) {
				index = i;
				break;
			}
		}
		let colorList = this.state.colorList;
		colorList[index] = color;
		this.setState({ colorList: colorList });
	};

	findElementAlgo = async () => {
		this.setState({ deactivate: true });
		let ans = this.getAnswer();
		let flag = 0,
			index;
		for (let i = 0; i < ans.length; i++) {
			if (ans[i].toString() === this.state.findElement) {
				this.quickChangeColor(ans[i], "#24be47");
				await timeout(this.state.delay);
				index = i;
				flag = 1;
				break;
			}
			this.quickChangeColor(ans[i], "#007bff");
			await timeout(this.state.delay);
			this.quickChangeColor(ans[i], "beige");
		}
		if (flag === 1) {
			this.quickChangeColor(ans[index], "beige");
		} else {
			console.log("not found");
		}
		this.setState({ deactivate: false });
	};

	render() {
		return (
			<div className='container1'>
				<div className='left'>
					<div className='container-plate1' style={{ width: "100%" }}>
						<div className='root'>
							<div
								className='Node'
								style={{
									backgroundColor: this.state.colorList[0],
								}}>
								{this.state.arrangedElements[0]}
							</div>
						</div>
						<div className='connector'>
							<hr
								style={{
									borderWidth: "2px",
									borderColor: "#48494a",
									width: "146px",
									transform: "rotate(-28deg)",
									zIndex: "-10",
									marginLeft: "181px",
								}}></hr>
							<hr
								style={{
									borderWidth: "2px",
									borderColor: "#48494a",
									width: "146px",
									transform: "rotate(28deg)",
									zIndex: "10",
									marginLeft: "359px",
									marginTop: "-19px",
								}}></hr>
						</div>

						<div className='depth1'>
							<div
								className='Node'
								style={{
									backgroundColor: this.state.colorList[1],
								}}>
								{this.state.arrangedElements[1]}
							</div>
							<div
								className='Node'
								style={{
									backgroundColor: this.state.colorList[4],
								}}>
								{this.state.arrangedElements[4]}
							</div>
						</div>
						<div className='connector'>
							<hr
								style={{
									borderWidth: "2px",
									borderColor: "#48494a",
									width: "113px",
									transform: "rotate(-60deg)",
									zIndex: "-10",
									marginLeft: "70px",
									marginTop: "43px",
								}}></hr>
							<hr
								style={{
									borderWidth: "2px",
									borderColor: "#48494a",
									width: "115px",
									transform: "rotate(60deg)",
									zIndex: "-10",
									marginLeft: "163px",
									marginTop: "-22px",
								}}></hr>
							<hr
								style={{
									borderWidth: "2px",
									borderColor: "#48494a",
									width: "114px",
									transform: "rotate(60deg)",
									zIndex: "-10",
									marginLeft: "503px",
									marginTop: "-15px",
								}}></hr>
							<hr
								style={{
									borderWidth: "2px",
									borderColor: "#48494a",
									width: "117px",
									transform: "rotate(-60deg)",
									zIndex: "-10",
									marginTop: "-22px",
									marginLeft: "405px",
								}}></hr>
						</div>
						<div className='depth2'>
							<div
								className='Node'
								style={{
									backgroundColor: this.state.colorList[2],
								}}>
								{this.state.arrangedElements[2]}
							</div>
							<div
								className='Node'
								style={{
									backgroundColor: this.state.colorList[3],
								}}>
								{this.state.arrangedElements[3]}
							</div>
							<div
								className='Node'
								style={{
									backgroundColor: this.state.colorList[5],
								}}>
								{this.state.arrangedElements[5]}
							</div>
							<div
								className='Node'
								style={{
									backgroundColor: this.state.colorList[6],
								}}>
								{this.state.arrangedElements[6]}
							</div>
						</div>
					</div>
				</div>
				<div className='right'>
					<div className='rightUp'>
						<Button
							type='Button'
							className='btn btn-321'
							disabled={this.state.deactivate}
							onClick={this.addElements}>
							Generate Random Tree
						</Button>
					</div>
					<div className='lower123' style={{ marginTop: "40px" }}>
						<div>
							<Dropdown>
								<Dropdown.Toggle
									variant='success'
									id='dropdown-basic'>
									{this.state.traversal}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										as='button'
										onClick={() =>
											this.changeTraversal("preOrder")
										}>
										preOrder
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() =>
											this.changeTraversal("inOrder")
										}>
										inOrder
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() =>
											this.changeTraversal("postOrder")
										}>
										postOrder
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() =>
											this.changeTraversal(
												"breadthFirstSearch"
											)
										}>
										breadthFirstSearch
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div>
							<Dropdown>
								<Dropdown.Toggle
									variant='success'
									id='dropdown-basic'>
									{this.showSpeed()}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										as='button'
										onClick={() => this.changeDelay(1000)}>
										Slow
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() => this.changeDelay(700)}>
										Medium
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() => this.changeDelay(500)}>
										Fast
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
					<div
						className='sort input-group'
						style={{ marginTop: "70px" }}>
						<input
							type='text'
							className='form-control'
							placeholder='Find Number'
							style={{
								backgroundColor: "#bfc9d9",
								fontSize: "15px",
							}}
							onChange={(e) =>
								this.setState({ findElement: e.target.value })
							}
						/>
						<div className='input-group-append'>
							<Button
								className='btn'
								style={{
									background: "yellow",
									font: "15px",
								}}
								onClick={this.findElementAlgo}
								type='button'>
								Find
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BSTcomp;

import React, { useEffect, useState } from "react";
import "../App.css";
import BST from "../utils/BST";

function BSTcomp() {

	const bst = new BST();
	const [elements, setElements] = useState([]);
	const [arrangedElements, setArrangedElements] = useState([]);
	const [root, setRoot] = useState(null);
	const [colorList, setColorList] = useState([
		"beige",
		"beige",
		"beige",
		"beige",
		"beige",
		"beige",
		"beige",
	]);
	const [findElement, setFindElement] = useState(0);
	const [delay, setDelay] = useState(700);
	const [traversal, setTraversal] = useState("preOrder");
	const [deactivate, setDeactivate] = useState(false);

	// useEffect(() => addElements());

	const createTree = () => {
		let root1 = bst.insertSortedArray(elements, 0, elements.length - 1);
		let arrElements = bst.preOrder(root1);
		
		setArrangedElements(arrElements);
		setRoot(root1);
	};

	

	return (
		<div className='container1'>
			<div className='left'>
				<div className='container-plate1' style={{width: "100%"}}>
					<div className='root'>
						<div
							className='Node'
							style={{
								backgroundColor: colorList[0],
							}}>
							{arrangedElements[0]}
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
								backgroundColor: colorList[1],
							}}>
							{arrangedElements[1]}
						</div>
						<div
							className='Node'
							style={{
								backgroundColor: colorList[4],
							}}>
							{arrangedElements[4]}
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
								marginLeft: "405px"
							}}></hr>
					</div>
					<div className='depth2'>
						<div
							className='Node'
							style={{
								backgroundColor: colorList[2],
							}}>
							{arrangedElements[2]}
						</div>
						<div
							className='Node'
							style={{
								backgroundColor: colorList[3],
							}}>
							{arrangedElements[3]}
						</div>
						<div
							className='Node'
							style={{
								backgroundColor: colorList[5],
							}}>
							{arrangedElements[5]}
						</div>
						<div
							className='Node'
							style={{
								backgroundColor: colorList[6],
							}}>
							{arrangedElements[6]}
						</div>
					</div>
				</div>
			</div>
			<div className='right'></div>
		</div>
	);
}

export default BSTcomp;

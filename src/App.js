import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import BST from "./Components/BST";
import Heading from "./Components/Heading";
import Sorting from "./Components/Sorting";
import addBars from "./utils/addBars";
import { getRandomInt } from "./utils/functions";

function App() {
	const [ds, setDs] = useState("sorting");
	const [barList, setBarList] = useState([]);
	const [numberOfBars, setNumberOfBars] = useState(13);
	const [delay, setDelay] = useState(400);
	const [currentAlgo, setCurrentAlgo] = useState("BubbleSort");
	const [deactivate, setDeactivate] = useState(false);

	const onChangeAlgo = (algo) => {
		setCurrentAlgo(algo);
	};

	const onChangeSpeed = (speed) => {
		setDelay(speed);
	};

	const sorting = () => {
		if (!deactivate) {
			if (currentAlgo === "BubbleSort") return bubblesort;
		}
	};

	const handleChange = (e, newValue) => {
		if (!deactivate) {
			setNumberOfBars(newValue);
			addElements();
		}
	};

	const addElements = () => {
		let i = 0,
			height = 0,
			tmpList = [];
		while (i < numberOfBars) {
			height = getRandomInt(20, 380);
			tmpList.push({
				barHeight: height,
				barColor: "beige",
			});
			i++;
		}
		setBarList(tmpList);
	};

	// bubblesort
	const bubblesort = async () => {
		setDeactivate(true);
		let items = barList;
		let length = items.length;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (items[j]["barHeight"] > items[j + 1]["barHeight"]) {
					let t = items[j]["barHeight"];
					items[j]["barHeight"] = items[j + 1]["barHeight"];
					items[j + 1]["barHeight"] = t;
				}
				setBarList(items);
			}
		}
		setBarList(items);
		setDeactivate(false);
	};

	return (
		<main className='app'>
			<header>
				<Heading />
			</header>
			<div className='link'>
				<a
					href='https://github.com/dubeyji0110/VisualizingAlgorithms/'
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-github'></i> Github Repo {"</>"}
				</a>
			</div>
			<section className="buttons">
				<Button
					onClick={() => setDs("sorting")}
					type='button'
					className={
						ds === "sorting" ? "selectedBtn" : "unselectedBtn"
					}>
					Sorting
				</Button>
				<Button
					onClick={() => setDs("tree")}
					type='button'
					className={ds === "tree" ? "selectedBtn" : "unselectedBtn"}>
					Binary Search Tree
				</Button>
			</section>
			<section>
				{ds === "sorting" ? (
					<Sorting
						numberOfBars={numberOfBars}
						barList={barList}
						onChangeAlgo={onChangeAlgo}
						onChangeSpeed={onChangeSpeed}
						Sort={sorting()}
						addBars={addBars(barList)}
						slider={handleChange}
					/>
				) : (
					<BST />
				)}
			</section>
		</main>
	);
}

export default App;

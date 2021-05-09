import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import BSTcomp from "./Components/BSTcomp";
import Heading from "./Components/Heading";
import Sorting from "./Components/Sorting";
import addBars from "./utils/addBars";
import { getRandomInt, timeout } from "./utils/functions";

function App() {
	const [ds, setDs] = useState("tree");
	const [barList, setBarList] = useState([]);
	const [numberOfBars, setNumberOfBars] = useState(13);
	const [delay, setDelay] = useState(400);
	const [currentAlgo, setCurrentAlgo] = useState("BubbleSort");
	const [deactivate, setDeactivate] = useState(false);

	useEffect(() => {
		addElements();
	}, [numberOfBars]);

	const onChangeAlgo = (algo) => {
		setCurrentAlgo(algo);
	};

	const onChangeSpeed = (speed) => {
		setDelay(speed);
	};

	const sorting = () => {
		if (!deactivate) {
			if (currentAlgo === "BubbleSort") return bubblesort;
			else if (currentAlgo === "QuickSort") return null;
			else if (currentAlgo === "InsertionSort") return null;
		} else {
			return null;
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
			<section className='buttons'>
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
						onChangeAlgo={onChangeAlgo}
						onChangeSpeed={onChangeSpeed}
						Sort={sorting()}
						Bars={addBars(barList)}
						slider={handleChange}
					/>
				) : (
					<BSTcomp />
				)}
			</section>
		</main>
	);
}

export default App;

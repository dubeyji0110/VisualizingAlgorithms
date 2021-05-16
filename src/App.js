import { Button } from "@material-ui/core";
import React from "react";
import "./App.css";
import BSTcomp from "./Components/BSTcomp";
import Heading from "./Components/Heading";
import Sorting from "./Components/Sorting";
import addBars from "./utils/addBars";
import { getRandomInt, timeout } from "./utils/functions";

// function App() {
// 	const [ds, setDs] = useState("tree");
// 	const [barList, setBarList] = useState([]);
// 	const [numberOfBars, setNumberOfBars] = useState(13);
// 	const [delay, setDelay] = useState(400);
// 	const [currentAlgo, setCurrentAlgo] = useState("BubbleSort");
// 	const [deactivate, setDeactivate] = useState(false);

// 	useEffect(() => {
// 		addElements();
// 	}, [numberOfBars]);

// 	const onChangeAlgo = (algo) => {
// 		setCurrentAlgo(algo);
// 	};

// 	const onChangeSpeed = (speed) => {
// 		setDelay(speed);
// 	};

// 	const sorting = () => {
// 		if (!deactivate) {
// 			if (currentAlgo === "BubbleSort") return bubblesort;
// 			else if (currentAlgo === "QuickSort") return null;
// 			else if (currentAlgo === "InsertionSort") return null;
// 		} else {
// 			return null;
// 		}
// 	};

// 	const handleChange = (e, newValue) => {
// 		if (!deactivate) {
// 			setNumberOfBars(newValue);
// 			addElements();
// 		}
// 	};

// 	const addElements = () => {
// 		let i = 0,
// 			height = 0,
// 			tmpList = [];
// 		while (i < numberOfBars) {
// 			height = getRandomInt(20, 380);
// 			tmpList.push({
// 				barHeight: height,
// 				barColor: "beige",
// 			});
// 			i++;
// 		}
// 		setBarList(tmpList);
// 	};

// 	// bubblesort
// 	const bubblesort = async () => {
// 		setDeactivate(true);
// 		let items = barList;
// 		let length = items.length;
// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				if (items[j]["barHeight"] > items[j + 1]["barHeight"]) {
// 					items[j]["barColor"] = "#91d3e3";
// 					items[j + 1]["barColor"] = "#91d3e3";
// 					setBarList(items);

// 					let t = items[j]["barHeight"];
// 					items[j]["barHeight"] = items[j + 1]["barHeight"];
// 					items[j + 1]["barHeight"] = t;
// 				}
// 				await timeout(delay);
// 				items[j]["barColor"] = "beige";
// 				items[j + 1]["barColor"] = "#91e395";
// 				setBarList(items);
// 			}
// 		}
// 		items = barList;
// 		for (let i = 0; i < length; i++) {
// 			// items[i]["barColor"] = "beige";
// 			// uper wali line ko uncomment krne se color wapis normal ho jayege
// 		}
// 		setBarList(items);
// 		setDeactivate(false);
// 	};

// 	return (
// 		<main className='app'>
// 			<header>
// 				<Heading />
// 			</header>
// 			<div className='link'>
// 				<a
// 					href='https://github.com/dubeyji0110/VisualizingAlgorithms/'
// 					target='_blank'
// 					rel='noreferrer'>
// 					<i className='fab fa-github'></i> Github Repo {"</>"}
// 				</a>
// 			</div>
// 			<section className='buttons'>
// 				<Button
// 					onClick={() => setDs("sorting")}
// 					type='button'
// 					className={
// 						ds === "sorting" ? "selectedBtn" : "unselectedBtn"
// 					}>
// 					Sorting
// 				</Button>
// 				<Button
// 					onClick={() => setDs("tree")}
// 					type='button'
// 					className={ds === "tree" ? "selectedBtn" : "unselectedBtn"}>
// 					Binary Search Tree
// 				</Button>
// 			</section>
// 			<section>
// 				{ds === "sorting" ? (
// 					<Sorting
// 						numberOfBars={numberOfBars}
// 						onChangeAlgo={onChangeAlgo}
// 						onChangeSpeed={onChangeSpeed}
// 						Sort={sorting()}
// 						Bars={addBars(barList)}
// 						slider={handleChange}
// 					/>
// 				) : (
// 					<BSTcomp />
// 				)}
// 			</section>
// 		</main>
// 	);
// }

class App extends React.Component {
	state = {
		barList: [],
		numberOfBars: 13,
		delay: 400,
		currentAlgo: "BubbleSort",
		deactivate: false,
		ds: "tree",
	};

	componentDidMount() {
		this.addElements();
		addBars(this.state.barList);
	}

	handleChange = (e, newVal) => {
		if (!this.state.deactivate) {
			this.setState({ numberOfBars: newVal });
			this.addElements();
		}
	};

	addElements = () => {
		let i = 0,
			height = 0,
			tmpList = [];
		while (i < this.state.numberOfBars) {
			height = getRandomInt(20, 380);
			tmpList.push({
				barHeight: height,
				barColor: "beige",
			});
			i++;
		}
		this.setState({ barList: tmpList });
	};

	onChangeAlgo = (algo) => {
		this.setState({ currentAlgo: algo });
	};

	onChangeSpeed = (speed) => {
		this.setState({ delay: speed });
	};

	sorting = () => {
		if (!this.state.deactivate) {
			if (this.state.currentAlgo === "BubbleSort") return this.bubblesort;
			else if (this.state.currentAlgo === "SelectionSort")
				return this.selectionsort;
			else if (this.state.currentAlgo === "QuickSort")
				return this.startQuickSort;
			else if (this.state.currentAlgo === "InsertionSort")
				return this.insertionsort;
		} else {
			return null;
		}
	};

	// bubble sort
	bubblesort = async () => {
		this.setState({ deactivate: true });
		let items = this.state.barList;
		let length = items.length;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (items[j]["barHeight"] > items[j + 1]["barHeight"]) {
					items[j]["barColor"] = "#91d3e3";
					items[j + 1]["barColor"] = "#91d3e3";
					this.setState({ barList: items });
					let t = items[j]["barHeight"];
					items[j]["barHeight"] = items[j + 1]["barHeight"];
					items[j + 1]["barHeight"] = t;
				}
				await timeout(this.state.delay);
				items[j]["barColor"] = "beige";
				items[j + 1]["barColor"] = "#91e395";
				this.setState({ barList: items });
			}
		}
		items = this.state.barList;
		for (let i = 0; i < length; i++) {
			items[i]["barColor"] = "beige";
		}
		this.setState({ barList: items });
		this.setState({ deactivate: false });
	};

	// selection sort
	selectionsort = async () => {
		this.setState({ deactivate: true });
		let items = this.state.barList;
		let length = items.length;
		for (let i = 0; i < length - 1; i++) {
			let min = i;
			items[i]["barColor"] = "#91d3e3";
			for (let j = i + 1; j < length; j++) {
				if (items[j]["barHeight"] < items[min]["barHeight"]) {
					min = j;
				}
			}
			items[min]["barColor"] = "#91d3e3";
			let t = items[min]["barHeight"];
			items[min]["barHeight"] = items[i]["barHeight"];
			items[i]["barHeight"] = t;
			this.setState({ barList: items });
			await timeout(this.state.delay);

			items[min]["barColor"] = "beige";
			items[i]["barColor"] = "#91e395";
			this.setState({ barList: items });
		}
		items = this.state.barList;
		for (let i = 0; i < length; i++) {
			items[i]["barColor"] = "beige";
		}
		this.setState({ barList: items });
		this.setState({ deactivate: false });
	};

	// insertion sort
	insertionsort = async () => {
		this.setState({ deactivate: true });
		let items = this.state.barList;
		let length = items.length;
		for (let i = 1; i < length; i++) {
			let key = items[i];
			this.state.barList[this.state.barList.indexOf(key)]["barColor"] =
				"#5c5c5c";
			this.setState({ barList: items });
			await timeout(this.state.delay);
			let j = i - 1;
			while (j >= 0 && items[j]["barHeight"] > key["barHeight"]) {
				items[j + 1] = items[j];
				this.state.barList[j + 1]["barColor"] = "#91d3e3";
				this.setState({ barList: items });
				await timeout(this.state.delay);
				this.state.barList[j + 1]["barColor"] = "beige";
				await timeout(this.state.delay);
				j--;
			}
			this.setState({ barList: items });
			items[j + 1] = key;
			this.state.barList[j + 1]["barColor"] = "#91e395";
		}
		for (var i = 0; i < length; i++) {
			items[i]["barColor"] = "beige";
		}
		this.setState({ barList: items, deactivate: false });
	};

	// quick sort
	changeColor = (index, color) => {
		let arr = this.state.barList;
		arr[index]["barColor"] = color;
		this.setState({ barList: arr });
	}
	swap = (left, right) => {
		let items = this.state.barList;
		let t = items[left];
		items[left] = items[right];
		items[right] = t;
		this.setState({ barList: items });
	};
	partition = async (left, right) => {
		let pivot = this.state.barList[Math.floor((left + right) / 2)];

		this.changeColor(this.state.barList.indexOf(pivot), "#5c5c5c");
		let i = left,
			j = right;
		while (i <= j) {
			while (this.state.barList[i]["barHeight"] < pivot["barHeight"]) {
				i++;
				this.changeColor(i, "#91d3e3");
				await timeout(this.state.delay);
				this.changeColor(i, "beige");
			}
			while (this.state.barList[j]["barHeight"] > pivot["barHeight"]) {
				j--;
				this.changeColor(j, "#91d3e3");
				await timeout(this.state.delay);
				this.changeColor(j, "beige");
			}
			if (i <= j) {
				this.swap(i, j);
				i++;
				j--;
			}
		}
		return i;
	};
	quicksort = async (left, right) => {
		let index;
		if (this.state.barList.length > 1) {
			index = await this.partition(left, right);
			this.changeColor(index, "#91e395");
			await timeout(this.state.delay);
			this.changeColor(index, "beige");
			if (left < index - 1) {
				this.quicksort(left, index - 1);
			}
			if (index < right) {
				this.quicksort(index, right);
			}
		}
	};
	startQuickSort = () => {
		this.quicksort(0, this.state.barList.length - 1);
	};

	render() {
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
						onClick={() => this.setState({ ds: "sorting" })}
						type='button'
						className={
							this.state.ds === "sorting"
								? "selectedBtn"
								: "unselectedBtn"
						}>
						Sorting
					</Button>
					<Button
						onClick={() => this.setState({ ds: "tree" })}
						type='button'
						className={
							this.state.ds === "tree"
								? "selectedBtn"
								: "unselectedBtn"
						}>
						Binary Search Tree
					</Button>
				</section>
				<section>
					{this.state.ds === "sorting" ? (
						<Sorting
							numberOfBars={this.state.numberOfBars}
							onChangeAlgo={this.onChangeAlgo}
							onChangeSpeed={this.onChangeSpeed}
							Sort={this.sorting()}
							Bars={addBars(this.state.barList)}
							slider={this.handleChange}
						/>
					) : (
						<BSTcomp />
					)}
				</section>
			</main>
		);
	}
}

export default App;

import { Button, Slider } from "@material-ui/core";
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import "../App.css";

function Sorting({
	numberOfBars,
	addBars,
	barList,
	slider,
	Sort,
	onChangeAlgo,
	onChangeSpeed,
}) {

	const [currentAlgo, setCurrentAlgo] = useState("BubbleSort");
	const [delay, setDelay] = useState(400);

	const changeAlgo = algo => {
		setCurrentAlgo(algo);
		onChangeAlgo(currentAlgo);
	}

	const showSpeed = () => {
		if (delay === 600) {
			return "Slow";
		} else if (delay === 400) {
			return "Medium";
		} else {
			return "Fast";
		}
	}

	return (
		<main className='container1'>
			<div className='left'>{addBars}</div>
			<div className='right'>
				<div className='rightUp'>
					<span style={{color: "white", fontSize:"18px", fontWeight: "200"}}>Slide to add or delete bars, </span>
					<span className='badge badge-success' style={{fontSize:"15px"}}>
						Currently <span className='badge-light badge'>{numberOfBars}</span>
					</span>
				</div>
				<div className='rightDown'>
					<Slider
						valueLabelDisplay='auto'
						max={18}
						min={2}
						defaultValue={numberOfBars}
						onChange={slider}
					/>
					<div className='lower123'>
						<div>
							<Dropdown>
								<Dropdown.Toggle
									variant='success'
									id='dropdown-basic'>
									{currentAlgo}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										as='button'
										onClick={() =>
											changeAlgo("BubbleSort")
										}>
										BubbleSort
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() =>
											changeAlgo("InsertionSort")
										}>
										InsertionSort
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() => changeAlgo("QuickSort")}>
										QuickSort
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div>
							<Dropdown>
								<Dropdown.Toggle
									variant='success'
									id='dropdown-basic'>
									{showSpeed()}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item
										as='button'
										onClick={() => setDelay(600)}>
										Slow
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() => setDelay(400)}>
										Medium
									</Dropdown.Item>
									<Dropdown.Item
										as='button'
										onClick={() => setDelay(200)}>
										Fast
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
				</div>
					<div className="sort">
						<Button type="button" className="btn-123">SORT</Button>
					</div>
			</div>
		</main>
	);
}

export default Sorting;

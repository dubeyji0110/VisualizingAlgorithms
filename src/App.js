import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";

function App() {
	
	const [ds, setDs] = useState("sorting");

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
			<section>
				<div>
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
						className={
							ds === "tree" ? "selectedBtn" : "unselectedBtn"
						}>
						Binary Search Tree
					</Button>
				</div>

			</section>
		</main>
	);
}

export default App;

import React from "react";
import Typewriter from "typewriter-effect";

const styleHeading = {
    fontSize: "2.5rem",
	textAlign: "center",
	color: "antiquewhite"
}

function Heading() {
	return (
		<div className='heading' style={styleHeading}>
			<span>
				<Typewriter
					options={{
						strings: ["Visualising Algorithms..."],
						autoStart: true,
						loop: true,
						delay: 200,
					}}
				/>
			</span>
		</div>
	);
}

export default Heading;

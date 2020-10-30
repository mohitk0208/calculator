import React from "react";
import Add from "./functionKeys/Add";
import Backspace from "./functionKeys/Backspace";
import Clear from "./functionKeys/Clear";
import Divide from "./functionKeys/Divide";
import Equals from "./functionKeys/Equals";
import Multiply from "./functionKeys/Multiply";
import Percent from "./functionKeys/Percent";
import Subtract from "./functionKeys/Subtract";

import "./Keypad.css";
import NumberKey from "./NumberKey";
const Keypad = () => {
	return (
		<div className="keypad-container">
			<Clear />
			<Percent />
			<Backspace />
			<Divide />
			<NumberKey value={"7"} />
			<NumberKey value={"8"} />
			<NumberKey value={"9"} />
			<Multiply />
			<NumberKey value={"4"} />
			<NumberKey value={"5"} />
			<NumberKey value={"6"} />
			<Subtract />
			<NumberKey value={"1"} />
			<NumberKey value={"2"} />
			<NumberKey value={"3"} />
			<Add />
			<NumberKey value={"00"} />
			<NumberKey value={"0"} />
			<NumberKey value={"."} />
			<Equals />
		</div>
	);
};

export default Keypad;

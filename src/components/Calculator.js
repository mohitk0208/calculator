import React from "react";
import ExpressionProvider from "../context/ExpressionContext";
import ResultProvider from "../context/ResultContext";

import "./Calculator.css";
import Display from "./Display";
import Keypad from "./KeypadComponents/Keypad";

function Calculator() {
	return (
		<div className="calculator-container">
			<ExpressionProvider>
				<ResultProvider>
					<Display />
					<Keypad />
				</ResultProvider>
			</ExpressionProvider>
		</div>
	);
}

export default Calculator;

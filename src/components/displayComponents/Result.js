import React from "react";
import { useResult } from "../../context/ResultContext";

import "./Result.css";

export const Result = () => {
	const result = useResult();

	return (
		<div className="result-container">
			<h2>{result}</h2>
		</div>
	);
};

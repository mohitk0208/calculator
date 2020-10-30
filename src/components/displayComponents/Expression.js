import React from "react";
import { useExpression } from "../../context/ExpressionContext";

import "./Expression.css";
const Expression = () => {
	const expression = useExpression();

	return (
		<div className="expression-container">
			<h1>{expression}</h1>
		</div>
	);
};

export default Expression;

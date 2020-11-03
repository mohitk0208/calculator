import React from "react";
import { useExpression } from "../../context/ExpressionContext";

import "./Expression.css";
const Expression = () => {
	const expression = useExpression();

	return (
		<div className="expression-container">
			<span>{expression}</span>
		</div>
	);
};

export default Expression;

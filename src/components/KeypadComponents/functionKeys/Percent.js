import React from "react";
import {
	useExpression,
	useExpressionUpdater,
} from "../../../context/ExpressionContext";
import KeyBase from "../KeyBase";

function addPercentValidation(expression) {
	const length = expression.length;

	if (expression === "") return false;
	if (
		expression[length - 1] === "/" ||
		expression[length - 1] === "*" ||
		expression[length - 1] === "-" ||
		expression[length] === "+"
	)
		return false;

	return true;
}

const Percent = () => {
	const expression = useExpression();
	const setExpression = useExpressionUpdater();

	const addPercentHandler = () => {
		if (addPercentValidation(expression)) {
			setExpression((prev) => prev + "%");
		}
	};

	return <KeyBase value="%" onClick={addPercentHandler} />;
};

export default Percent;

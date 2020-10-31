import React from "react";
import {
	useExpression,
	useExpressionUpdater,
} from "../../../context/ExpressionContext";
import KeyBase from "../KeyBase";

const addDivideValidation = (exp) => {
	const len = exp.length;

	if (exp === "") return false;

	if (
		exp[len - 1] === "*" ||
		exp[len - 1] === "/" ||
		exp[len - 1] === "+" ||
		exp[len - 1] === "-"
	)
		return false;

	return true;
};

const Divide = () => {
	const expression = useExpression();
	const setexpression = useExpressionUpdater();

	const divideHandler = () => {
		if (addDivideValidation(expression)) setexpression((prev) => prev + "/");
	};

	return <KeyBase value="/" colored onClick={divideHandler} />;
};

export default Divide;

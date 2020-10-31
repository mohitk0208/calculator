import React from "react";
import {
	useExpression,
	useExpressionUpdater,
} from "../../../context/ExpressionContext";
import KeyBase from "../KeyBase";

const addValidation = (exp) => {
	const len = exp.length;

	if (exp === "") return false;
	if (
		exp[len - 1] === "*" ||
		exp[len - 1] === "/" ||
		exp[len - 1] === "-" ||
		exp[len - 1] === "+"
	)
		return false;

	return true;
};
const Add = () => {
	const expression = useExpression();
	const setExpression = useExpressionUpdater();

	const addHandler = () => {
		if (addValidation(expression)) setExpression((prev) => prev + "+");
	};

	return <KeyBase value="+" colored onClick={addHandler} />;
};

export default Add;

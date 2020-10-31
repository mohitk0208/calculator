import React from "react";
import {
	useExpression,
	useExpressionUpdater,
} from "../../../context/ExpressionContext";
import KeyBase from "../KeyBase";

const addMultiplyValidation = (exp) => {
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

const Multiply = () => {
	const expression = useExpression();
	const setExpression = useExpressionUpdater();

	const multiplyHandler = () => {
		if (addMultiplyValidation(expression)) setExpression((prev) => prev + "*");
	};

	return <KeyBase value="*" colored onClick={multiplyHandler} />;
};

export default Multiply;

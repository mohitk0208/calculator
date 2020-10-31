import React from "react";
import {
	useExpression,
	useExpressionUpdater,
} from "../../../context/ExpressionContext";
import KeyBase from "../KeyBase";

const addSubtractValidation = (exp) => {
	const len = exp.length;

	if (exp[len - 1] === "+" || exp[len - 1] === "-") return false;

	return true;
};

const Subtract = () => {
	const expression = useExpression();
	const setExpression = useExpressionUpdater();

	const subtractHandler = () => {
		if (addSubtractValidation(expression)) setExpression((prev) => prev + "-");
	};

	return <KeyBase value="-" colored onClick={subtractHandler} />;
};

export default Subtract;

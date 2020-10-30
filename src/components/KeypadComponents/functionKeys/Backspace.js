import React from "react";
import {
	useExpression,
	useExpressionUpdater,
} from "../../../context/ExpressionContext";
import KeyBase from "../KeyBase";

const Backspace = () => {
	const expression = useExpression();
	const setExpression = useExpressionUpdater();

	const backspaceHandler = () => {
		if (expression !== "") {
			console.log(expression.slice(0, expression.length-1));
			setExpression((prev) => prev.slice(0, prev.length-1));
		}
	};

	return <KeyBase value="<=" onClick={backspaceHandler} />;
};

export default Backspace;

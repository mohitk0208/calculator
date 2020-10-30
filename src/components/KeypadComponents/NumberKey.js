import React from "react";
import {
	useExpression,
	useExpressionUpdater,
} from "../../context/ExpressionContext";
import KeyBase from "./KeyBase";

const dotValidationAndExpressionUpdate = (exp, setExp) => {
	const len = exp.length;
	if (
		exp[len - 1] === "%" ||
		exp[len - 1] === "/" ||
		exp[len - 1] === "*" ||
		exp[len - 1] === "-" ||
		exp[len - 1] === "+" ||
		exp === ""
	)
		setExp((prev) => prev + "0.");
	else setExp((prev) => prev + ".");
};

const NumberKey = ({ value }) => {
	const expression = useExpression();
	const setExpression = useExpressionUpdater();

	const numberInputHandler = () => {
		if (value === ".")
			dotValidationAndExpressionUpdate(expression, setExpression);
		else setExpression((prev) => prev + value);
	};

	return <KeyBase value={value} colored={false} onClick={numberInputHandler} />;
};

export default NumberKey;

import React from "react";
import { useExpressionUpdater } from "../../../context/ExpressionContext";
import { useResult, useResultUpdater } from "../../../context/ResultContext";
import KeyBase from "../KeyBase";

const Equals = () => {
	const result = useResult();
	const setResult = useResultUpdater();
	const setExpression = useExpressionUpdater();

	const equalsHandler = () => {
		if (result !== "" || result !== "invalid expression") {
			setExpression(result);
			setResult("");
		}
	};
	return <KeyBase value="=" colored onClick={equalsHandler} />;
};

export default Equals;

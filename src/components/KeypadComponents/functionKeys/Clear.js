import React from "react";
import {
	useExpression,
	useExpressionUpdater,
} from "../../../context/ExpressionContext";
import { useResult, useResultUpdater } from "../../../context/ResultContext";
import KeyBase from "../KeyBase";

const Clear = () => {
	const expression = useExpression();
	const result = useResult();
	const setExpression = useExpressionUpdater();
	const setResult = useResultUpdater();

	const clearHandler = () => {
        
		if (expression !== "") setExpression("");
		if (result !== "") setResult("");
	};

	return <KeyBase value="C" onClick={clearHandler} />;
};

export default Clear;

import React, { createContext, useContext, useEffect, useState } from "react";
import { useExpression } from "./ExpressionContext";
import {calculate} from "../functions/calculate"

const ResultContext = createContext();
const ResultUpdateContext = createContext();

export const useResult = () => useContext(ResultContext);
export const useResultUpdater = () => useContext(ResultUpdateContext);

const ResultProvider = ({ children }) => {
	const [result, setResult] = useState("65");
	const expression = useExpression();

	useEffect(() =>{
		const output = calculate(expression);
		console.log(output);
		if(isNaN(output)) setResult("");
		else setResult(output)
		
	},[expression])

	useEffect(() => {
		const obj = document.querySelector(".result-container span");
		obj.scrollLeft = obj.scrollWidth
	},[result])

	return (
		<>
			<ResultContext.Provider value={result}>
				<ResultUpdateContext.Provider value={setResult}>
					{children}
				</ResultUpdateContext.Provider>
			</ResultContext.Provider>
		</>
	);
};

export default ResultProvider;

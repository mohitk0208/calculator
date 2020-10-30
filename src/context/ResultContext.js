import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const ResultUpdateContext = createContext();

export const useResult = () => useContext(ResultContext);
export const useResultUpdater = () => useContext(ResultUpdateContext);

const ResultProvider = ({ children }) => {
	const [result, setResult] = useState("65");

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

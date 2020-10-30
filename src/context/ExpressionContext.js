import React, { createContext, useContext, useState } from "react";

const ExpressionContext = createContext();
const ExpressionUpdateContext = createContext();

export const useExpression = () => useContext(ExpressionContext);
export const useExpressionUpdater = () => useContext(ExpressionUpdateContext);

const ExpressionProvider = ({ children }) => {
	const [expression, setExpression] = useState("15*3");

	return (
		<>
			<ExpressionContext.Provider value={expression}>
				<ExpressionUpdateContext.Provider value={setExpression}>
					{children}
				</ExpressionUpdateContext.Provider>
			</ExpressionContext.Provider>
		</>
	);
};

export default ExpressionProvider;

const isalphaNumeric = (str) => {
	if (str === "*" || str === "/" || str === "+" || str === "-") return false;
	return true;
};

const preced = (str) => {
	if (str === "+" || str === "-") return 1;
	if (str === "*" || str === "/") return 2;
	return 0;
};

const compileInputExpression = (exp) => {
	let expression;
	expression = exp;

	// ***************************************
	// convert 45. to 45.0
	expression = expression.replace(/\.(?=[*+-/])|\.$/g, ".0");

	// ***************************************
	//convert 45%55 to 45*0.01*55
	expression = expression.replace(/%(?=[0-9])/g, "*0.01*");
	//convert 54% to 54*0.01
	//convert 4%/67+2% to 4*0.01/67+2*0.01
	expression = expression.replace(/%(?=[*/\-+% ])|%$/g, "*0.01");

	return expression;
};

const infixToPostfix = (infixArr) => {
	let operatorStack = [];
	let postfixArr = [];

	infixArr.forEach((infixEle) => {
		if (isalphaNumeric(infixEle)) postfixArr.push(infixEle);
		else {
			if (preced(infixEle) > preced(operatorStack[operatorStack.length - 1])) {
				operatorStack.push(infixEle);
			} else {
				while (
					operatorStack.length !== 0 &&
					preced(infixEle) <= preced(operatorStack[operatorStack.length - 1])
				) {
					postfixArr.push(operatorStack[operatorStack.length - 1]);
					operatorStack.pop();
				}
				operatorStack.push(infixEle);
			}
		}
	});

	while (operatorStack.length !== 0) {
		postfixArr.push(operatorStack[operatorStack.length - 1]);
		operatorStack.pop();
	}

	return postfixArr;
};

const evaluatePostfix = (postfixArr) => {
	let operands = [];

	postfixArr.forEach((postfixEle) => {
		if (isalphaNumeric(postfixEle)) {
			operands.push(postfixEle);
		} else {
			let val1 = Number(operands.pop());
			let val2 = Number(operands.pop());

			switch (postfixEle) {
				case "+":
					operands.push(val2 + val1);
					break;
				case "-":
					operands.push(val2 - val1);
					break;
				case "*":
					operands.push(val2 * val1);
					break;
				case "/":
					operands.push(val2 / val1);
					break;
				default:
					break;
			}
		}
	});

	return operands.pop();
};

export const calculate = (exp) => {
	let expression = compileInputExpression(exp);

	expression = expression.replace(/(?<=[*/])-/, "s");

	console.log(expression);

	const infix = expression.split(/(?=[*/+-])|(?<=[*/+-])|(?=s)/);

	for (let i = 0; i < infix.length; i++) {
		infix[i] = infix[i].replace("s", "-");
	}
	console.log(infix);

	const postfixArr = infixToPostfix(infix);

	console.log(evaluatePostfix(postfixArr));
};

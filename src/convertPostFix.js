function infixToPostfix(infix) {
  let stack = [];
  let postfix = "";
  const precedence = (operator) => {
    switch (operator) {
      case "+":
      case "-":
        return 1;
      case "*":
      case "/":
        return 2;
      case "^":
        return 3;
      default:
        return 0;
    }
  };
  for (let i = 0; i < infix.length; i++) {
    const token = infix[i];
    if (!isNaN(token)) {
      postfix += token;
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      let x;
      while ((x = stack.pop()) !== "(") {
        postfix += x;
      }
    } else {
      while (
        precedence(token) <= precedence(stack[stack.length - 1]) &&
        stack.length
      ) {
        const x = stack.pop();
        postfix += x;
      }
      stack.push(token);
    }
  }

  while (stack.length) {
    const x = stack.pop();
    postfix += x;
  }

  return postfix.replace(/\s/g, "");
}
function evaluatePostfix(str) {
  let expression = infixToPostfix(str);
  console.log(expression);
  let stack = [];
  let evalue;
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    if (isNumber(char)) {
      stack.push(parseInt(char));
    } else if (isOperator(char)) {
      let operand2 = stack.pop();
      let operand1 = stack.pop();
      let result = evaluate(char, operand1, operand2);
      stack.push(result);
    }
  }
  evalue = stack.pop();

  return evalue;
}

function isNumber(char) {
  return !isNaN(char);
}

function isOperator(char) {
  return (
    char == "+" || char == "-" || char == "*" || char == "/" || char == "^"
  );
}
function evaluate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    case "^":
      return Math.pow(operand1, operand2);
  }
}
module.exports = evaluatePostfix;

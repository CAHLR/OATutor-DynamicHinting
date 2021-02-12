var hints = [{id: "factor22a-h1", type: "hint", dependencies: [], title: "Difference of Squares Definition", text: "A difference of squares is an expression with the form $$n^2 x^2-b^2$$, where n and b are positive integers."}, {id: "factor22a-h2", type: "hint", dependencies: ["factor22a-h1"], title: "Integer Definition", text: "Integers are positive and negative whole numbers. For example, 4, 20, and -36 are integers, while 2.31 is not."}, {id: "factor22a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["factor22a-h2"], title: "Square Root of 16", text: "What is the square root of 16?"}, {id: "factor22a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["factor22a-h3"], title: "Square Root of 100", text: "What is the square root of 100?"}, {id: "factor22a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["factor22a-h3", "factor22a-h4"], title: "Classifying the Expression", text: "Is the expression a difference of squares?", choices: ["Yes", "No"]}, {id: "factor22a-h6", type: "hint", dependencies: ["factor22a-h5"], title: "Factoring a Difference of Squares", text: "A difference of squares $$n^2 x^2-b^2$$ can be factored as $$\\left(nx+b\\right) \\left(nx-b\\right)$$."}, ]; export {hints};
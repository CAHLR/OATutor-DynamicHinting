var hints = [{id: "VarCon3a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5a=-40"], dependencies: ["VarCon3a-h1"], title: "Subtraction", text: "Subtract 3 from each side.", variabilization: {}}, {id: "VarCon3a-h3", type: "hint", dependencies: ["VarCon3a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "VarCon3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["a=-8"], dependencies: ["VarCon3a-h3"], title: "Division", text: "Divide 5 from each side.", variabilization: {}}, {id: "VarCon3a-h5", type: "hint", dependencies: ["VarCon3a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon3a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon3a-h5"], title: "Verification", text: "Check whether $$\\left(5\\right) \\left(-8\\right)+\\left(3\\right)$$ equals -37.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};
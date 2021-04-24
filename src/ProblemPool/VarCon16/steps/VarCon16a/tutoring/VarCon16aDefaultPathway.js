var hints = [{id: "VarCon16a-h1", type: "hint", dependencies: [], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon16a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12h=12"], dependencies: ["VarCon16a-h1"], title: "Addition", text: "Add 4h to each side of the equation.", variabilization: {}}, {id: "VarCon16a-h3", type: "hint", dependencies: ["VarCon16a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "VarCon16a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["h=1"], dependencies: ["VarCon16a-h3"], title: "Division", text: "Divide 12 from each side.", variabilization: {}}, {id: "VarCon16a-h5", type: "hint", dependencies: ["VarCon16a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon16a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon16a-h5"], title: "Verification", text: "Check whether $$\\left(8\\right) \\left(1\\right)$$ equals $$-\\left(4\\right) \\left(1\\right)+\\left(12\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};
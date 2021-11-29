var hints = [{id: "ab1ad7fGenStr3a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$6y-24=-18$$"], dependencies: ["ab1ad7fGenStr3a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h3", type: "hint", dependencies: ["ab1ad7fGenStr3a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h4", type: "hint", dependencies: ["ab1ad7fGenStr3a-h3"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h5", type: "hint", dependencies: ["ab1ad7fGenStr3a-h4"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$6y=6$$"], dependencies: ["ab1ad7fGenStr3a-h5"], title: "Addition", text: "Add 24 to each side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h7", type: "hint", dependencies: ["ab1ad7fGenStr3a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y=1$$"], dependencies: ["ab1ad7fGenStr3a-h7"], title: "Division", text: "Divide 6 from each side.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h9", type: "hint", dependencies: ["ab1ad7fGenStr3a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr3a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["ab1ad7fGenStr3a-h9"], title: "Verification", text: "Check whether $$6\\left(1-4\\right)$$ equals -18.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};
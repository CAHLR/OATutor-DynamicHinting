var hints = [{id: "GenStr25q-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr25q-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40-5r=-4r+32"], dependencies: ["GenStr25q-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr25q-h3", type: "hint", dependencies: ["GenStr25q-h2"], title: "Variable Terms", text: "Collect all variable terms on the right side of the equation.", variabilization: {}}, {id: "GenStr25q-h4", type: "hint", dependencies: ["GenStr25q-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr25q-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["40=r+32"], dependencies: ["GenStr25q-h4"], title: "Addition", text: "Add 5r to each side of the equation.", variabilization: {}}, {id: "GenStr25q-h6", type: "hint", dependencies: ["GenStr25q-h5"], title: "Constant Terms", text: "Collect all constant terms on the left side of the equation.", variabilization: {}}, {id: "GenStr25q-h7", type: "hint", dependencies: ["GenStr25q-h6"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr25q-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["r=8"], dependencies: ["GenStr25q-h7"], title: "Subtraction", text: "Subtract 32 from each side.", variabilization: {}}, {id: "GenStr25q-h9", type: "hint", dependencies: ["GenStr25q-h8"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr25q-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr25q-h9"], title: "Verification", text: "Check whether $$\\left(5\\right) \\left(\\left(8\\right)-\\left(8\\right)\\right)$$ equals $$-\\left(2\\right) \\left(\\left(2\\right) \\left(8\\right)-\\left(16\\right)\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};
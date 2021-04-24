var hints = [{id: "Multiply28a-h1", type: "hint", dependencies: [], title: "Parentheses", text: "We first need to evaluate the expression in parentheses.", variabilization: {}}, {id: "Multiply28a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-16"], dependencies: ["Multiply28a-h1"], title: "Multiply", text: "What do we get for $$\\left(8\\right) \\left(-2\\right)$$?", variabilization: {}}, {id: "Multiply28a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["19"], dependencies: ["Multiply28a-h2"], title: "Subtract", text: "What do we get for 3-(-16)?", variabilization: {}}, {id: "Multiply28a-h4", type: "hint", dependencies: ["Multiply28a-h3"], title: "Multiply", text: "We then need to multiply 19 with 2.", variabilization: {}}, {id: "Multiply28a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["38"], dependencies: ["Multiply28a-h4"], title: "Multiply", text: "What do we get after the multiplication?", variabilization: {}}, {id: "Multiply28a-h6", type: "hint", dependencies: ["Multiply28a-h5"], title: "Subtract", text: "Lastly, we need to find the difference of 9 and 38.", variabilization: {}}, {id: "Multiply28a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-29"], dependencies: ["Multiply28a-h6"], title: "Subtract", text: "What do we get after the subtraction?", variabilization: {}}, ]; export {hints};
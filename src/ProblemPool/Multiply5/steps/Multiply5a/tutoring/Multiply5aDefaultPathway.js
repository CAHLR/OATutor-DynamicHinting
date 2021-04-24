var hints = [{id: "Multiply5a-h1", type: "hint", dependencies: [], title: "Write in Expanded Form", text: "We start by writing out the expression in its expanded form: $${\\left(-2\\right)}^4=\\left(-2\\right) \\left(-2\\right) \\left(-2\\right) \\left(-2\\right)$$, and we will simplify $$\\left(-2\\right) \\left(-2\\right) \\left(-2\\right) \\left(-2\\right)$$ by performing multiplication three times.", variabilization: {}}, {id: "Multiply5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["Multiply5a-h1"], title: "First Multiplication", text: "We now multiply the first $$\\left(-2\\right) \\left(-2\\right)$$ pair together and substitute the value back into the expression. What is $$\\left(-2\\right) \\left(-2\\right)$$?", variabilization: {}}, {id: "Multiply5a-h3", type: "hint", dependencies: ["Multiply5a-h2"], title: "First Multiplication", text: "$$\\left(2\\right) \\left(2\\right)=4$$, and since -2 and -2 have the same signs, our final answer is positive: $$\\left(-2\\right) \\left(-2\\right)=4$$.", variabilization: {}}, {id: "Multiply5a-h4", type: "hint", dependencies: ["Multiply5a-h3"], title: "Current Expression", text: "Substituting 4 back, the orignal expression now becomes $$\\left(4\\right) \\left(-2\\right) \\left(-2\\right)$$.", variabilization: {}}, {id: "Multiply5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-8"], dependencies: ["Multiply5a-h4"], title: "Second Multiplication", text: "What is $$\\left(4\\right) \\left(-2\\right)$$?", variabilization: {}}, {id: "Multiply5a-h6", type: "hint", dependencies: ["Multiply5a-h5"], title: "Second Multiplication", text: "$$\\left(4\\right) \\left(2\\right)=8$$, and since 4 and -2 have different signs, our final answer is negative: $$\\left(4\\right) \\left(-2\\right)=-8$$.", variabilization: {}}, {id: "Multiply5a-h7", type: "hint", dependencies: ["Multiply5a-h6"], title: "Current Expression", text: "Substituting -8 back, the orignal expression now becomes $$-\\left(8\\right) \\left(-2\\right)$$.", variabilization: {}}, {id: "Multiply5a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["Multiply5a-h7"], title: "Third Multiplication", text: "What is $$-\\left(8\\right) \\left(-2\\right)$$?", variabilization: {}}, {id: "Multiply5a-h9", type: "hint", dependencies: ["Multiply5a-h8"], title: "Third Multiplication", text: "$$\\left(8\\right) \\left(2\\right)=16$$, and since -8 and -2 have the same signs, our final answer is positive: $$-\\left(8\\right) \\left(-2\\right)=16$$.", variabilization: {}}, ]; export {hints};
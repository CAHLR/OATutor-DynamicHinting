var hints = [{id: "LinIneq5a-h1", type: "hint", dependencies: [], title: "Move Variable Terms", text: "We start by moving variable terms to one side of the inequality", variabilization: {}}, {id: "LinIneq5a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$13-17x \\geq -4$$"], dependencies: ["LinIneq5a-h1"], title: "Move Variable Terms", text: "What inequality do we get after grouping variable terms?", choices: ["$$13-17x \\geq -4$$", "$$\\left(13\\right)+\\left(3\\right) x \\geq -4$$"], variabilization: {}}, {id: "LinIneq5a-h3", type: "hint", dependencies: ["LinIneq5a-h2"], title: "Isolate", text: "We then isolate the variable term", variabilization: {}}, {id: "LinIneq5a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$-17x \\geq -17$$"], dependencies: ["LinIneq5a-h3"], title: "Isolate", text: "What inequlity do we get after isolating the variable term?", choices: ["$$-17x \\geq 9$$", "$$-17x \\geq -17$$"], variabilization: {}}, {id: "LinIneq5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-17"], dependencies: ["LinIneq5a-h4"], title: "Applying the Multiplication Property", text: "To make the coeffient of x be 1, what number should we multiply both sides of the inequality by?", variabilization: {}}, {id: "LinIneq5a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["LinIneq5a-h5"], title: "Left Side", text: "What is the left side after multiplying by -17?", variabilization: {}}, {id: "LinIneq5a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["LinIneq5a-h5"], title: "Right Side", text: "What is the right side after multiplying by -17?", variabilization: {}}, {id: "LinIneq5a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$ \\leq $$"], dependencies: ["LinIneq5a-h5"], title: "Sign", text: "What is the sign of the inequality after multiplication?", choices: ["$$ \\leq $$", "$$ \\geq $$"], variabilization: {}}, ]; export {hints};
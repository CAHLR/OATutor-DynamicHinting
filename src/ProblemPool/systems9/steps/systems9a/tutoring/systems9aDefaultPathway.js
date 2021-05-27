var hints = [{id: "systems9a-h1", type: "hint", dependencies: [], title: "Function Notation", text: "Write the system of equations using y to replace function notation.", variabilization: {}}, {id: "systems9a-h2", type: "hint", dependencies: ["systems9a-h1"], title: "Substitution", text: "Substitute the expression 0.85x+35,000 from the first equation into the second equation and solve for x.", variabilization: {}}, {id: "systems9a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["50000"], dependencies: ["systems9a-h2"], title: "Isolating Variables", text: "What is x equal to?", variabilization: {}}, {id: "systems9a-h4", type: "hint", dependencies: ["systems9a-h3"], title: "Substitution", text: "Substitute $$x=50 000$$, into either the cost function or the revenue function.", variabilization: {}}, {id: "systems9a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["77500"], dependencies: ["systems9a-h4"], title: "Isolating Variables", text: "What is y equal to?", variabilization: {}}, {id: "systems9a-h6", type: "hint", dependencies: ["systems9a-h5"], title: "Break-Even Point", text: "The break-even point is (50,000, 77,500).", variabilization: {}}, {id: "systems9a-h7", type: "hint", dependencies: ["systems9a-h6"], title: "Profit Function Formula", text: "The profit function is found using the formula $$P(x)=R(x)-C(x)$$. Plug in the x and y values to find the profit function.", variabilization: {}}, {id: "systems9a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["P(x)=0.7x-35000"], dependencies: ["systems9a-h7"], title: "Profit Function Formula", text: "What is the profit function?", variabilization: {}}, ]; export {hints};
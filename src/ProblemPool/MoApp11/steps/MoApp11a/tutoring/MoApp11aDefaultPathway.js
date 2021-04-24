var hints = [{id: "MoApp11a-h1", type: "hint", dependencies: [], title: "Identify known quantities", text: "There are two known quantities, 48 in. and 6 in.", variabilization: {}}, {id: "MoApp11a-h2", type: "hint", dependencies: ["MoApp11a-h1"], title: "Determine unknown quantities", text: "The unknown quantities are the dimensions and the area of the graph paper.", variabilization: {}}, {id: "MoApp11a-h3", type: "hint", dependencies: ["MoApp11a-h2"], title: "Assign a variable", text: "In this question, there are more than one unknown quantities, we need to choose one, for example, the width of the graph paper equal to x.", variabilization: {}}, {id: "MoApp11a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x+6"], dependencies: ["MoApp11a-h3"], title: "Express other quantities", text: "What is the length of the graph paper in terms of x?", variabilization: {}}, {id: "MoApp11a-h5", type: "hint", dependencies: ["MoApp11a-h4"], title: "Using the perimeter formula", text: "First, we should use the perimeter formula $$P=\\left(2\\right) L+\\left(2\\right) W$$ to find the dimensions.", variabilization: {}}, {id: "MoApp11a-h6", type: "hint", dependencies: ["MoApp11a-h5"], title: "Using the perimeter formula", text: "What is the mathematical form of \"the perimeter of graph paper is 48 in.\"?", variabilization: {}}, {id: "MoApp11a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["MoApp11a-h6"], title: "Simplify and Solve", text: "Solve the equation we write. What is x?", variabilization: {}}, {id: "MoApp11a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15"], dependencies: ["MoApp11a-h7"], title: "Calculate the other quantity", text: "What is $$x+\\left(6\\right)$$?", variabilization: {}}, {id: "MoApp11a-h9", type: "hint", dependencies: ["MoApp11a-h8"], title: "Using the area formula", text: "The standard formula for area is $$A=LW$$.", variabilization: {}}, {id: "MoApp11a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["135"], dependencies: ["MoApp11a-h9"], title: "Substitute", text: "What is $$\\left(9\\right) \\left(15\\right)$$?", variabilization: {}}, {id: "MoApp11a-h11", type: "hint", dependencies: ["MoApp11a-h10"], title: "Explain the solution", text: "The area of the graph paper is $${\\left(135\\right)}^2$$.", variabilization: {}}, ]; export {hints};
var hints = [{id: "VarCon30a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side."}, {id: "VarCon30a-h2", type: "hint", dependencies: ["VarCon30a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon30a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2.4x+4=-8"], dependencies: ["VarCon30a-h2"], title: "Subtraction", text: "Subtract 5.4x from each side."}, {id: "VarCon30a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2.4x=-12"], dependencies: ["VarCon30a-h3"], title: "Subtraction", text: "Subtract 4 from each side."}, {id: "VarCon30a-h5", type: "hint", dependencies: ["VarCon30a-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon30a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x=-5"], dependencies: ["VarCon30a-h5"], title: "Division", text: "Divide 2.4 from each side."}, {id: "VarCon30a-h7", type: "hint", dependencies: ["VarCon30a-h6"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon30a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["VarCon30a-h7"], title: "Verification", text: "Check whether $$\\left(78\\right) -\\left(5\\right)+\\left(4\\right)$$. equals $$\\left(54\\right) -\\left(5\\right)-\\left(8\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};
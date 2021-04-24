var hints = [{id: "Properties12a-h1", type: "hint", dependencies: [], title: "Multiplying numbers", text: "The first step is to multiply 15 and $$\\frac{3}{5}$$ so that later on we can distribute this number into the parenthesis.", variabilization: {}}, {id: "Properties12a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["9"], dependencies: ["Properties12a-h1"], title: "Multiplying numbers", text: "What is $$\\left(15\\right) \\frac{3}{5}$$?", variabilization: {}}, {id: "Properties12a-h3", type: "hint", dependencies: ["Properties12a-h2"], title: "Distributive Property", text: "The distributive property states that if a, b, c are real numbers, then $$a \\left(b+c\\right)=ab+ac$$.", variabilization: {}}, {id: "Properties12a-h4", type: "hint", dependencies: ["Properties12a-h3"], title: "Applying the Distributive Property", text: "Applying the distributive property on $$\\left(9\\right) \\left(\\left(4\\right) d+\\left(10\\right)\\right)$$, we get the expression $$\\left(9\\right) \\left(4\\right) d+\\left(9\\right) \\left(10\\right)$$.", variabilization: {}}, {id: "Properties12a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36d"], dependencies: ["Properties12a-h4"], title: "Multiplying", text: "What is $$\\left(9\\right) \\left(4\\right) d$$?", variabilization: {}}, {id: "Properties12a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["90"], dependencies: ["Properties12a-h4"], title: "Multiplying", text: "What is $$\\left(9\\right) \\left(10\\right)$$?", variabilization: {}}, {id: "Properties12a-h7", type: "hint", dependencies: ["Properties12a-h5", "Properties12a-h6"], title: "Final Answer", text: "Therefore, our final answer is $$\\left(36\\right) d+\\left(90\\right)$$.", variabilization: {}}, ]; export {hints};
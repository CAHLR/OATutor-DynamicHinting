var hints = [{id: "percent22a-h1", type: "hint", dependencies: [], title: "Simple Interest Formula", text: "The formula for simple interest is $$I=Prt$$, with I being interest, P being the initial amount of money invested (also called principal), r being the rate, and t being the time."}, {id: "percent22a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["r"], dependencies: ["percent22a-h1"], title: "Variable in question", text: "What do we want to find? In other words, what variable are we solving for?", choices: ["P", "r", "t", "I"]}, {id: "percent22a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["900"], dependencies: ["percent22a-h2"], title: "Finding the value for I", text: "How much interest did Jim's sister pay? Write without the dollar sign."}, {id: "percent22a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["percent22a-h3"], title: "Finding the value for t", text: "How many years are we considering?"}, {id: "percent22a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5000"], dependencies: ["percent22a-h4"], title: "Finding the value for P", text: "How much did Jim loan? Write without the dollar sign."}, {id: "percent22a-h6", type: "hint", dependencies: ["percent22a-h5"], title: "Solving for r", text: "The formula for r is $$r=\\frac{I}{P t}$$"}, ]; export {hints};
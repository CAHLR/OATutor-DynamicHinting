var hints = [{id: "transformation5a-h1", type: "hint", dependencies: [], title: "Definition of an Even Function", text: "A function is called an even function if for every input x, $$h x=h{\\left(-x\\right)}$$."}, {id: "transformation5a-h2", type: "hint", dependencies: ["transformation5a-h1"], title: "Definition of an Odd Function", text: "A function is called an odd function if for every input x, $$h x=-h{\\left(-x\\right)}$$."}, {id: "transformation5a-h3", type: "hint", dependencies: ["transformation5a-h2"], title: "How to Find h(-x)", text: "Find h(-x) by subsituting -x in wherever x appears in the original equation."}, {id: "transformation5a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{-\\left(1\\right)}{x}-\\left(3\\right) x$$"], dependencies: ["transformation5a-h3"], title: "Determining h(-x)", text: "What is h(-x) equal to?", choices: ["$$\\frac{-\\left(1\\right)}{x}-\\left(3\\right) x$$", "$$\\frac{1}{x}+\\left(3\\right) x$$", "$$\\frac{1}{x}-\\left(3\\right) x$$", "$$\\frac{-\\left(1\\right)}{x}+\\left(3\\right) x$$"]}, {id: "transformation5a-h5", type: "hint", dependencies: ["transformation5a-h4"], title: "How to Find -h(-x)", text: "Find -h(-x) by multiplying each term of g(-x) by -1."}, {id: "transformation5a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{1}{x}+\\left(3\\right) x$$"], dependencies: ["transformation5a-h5"], title: "Determining -h(-x)", text: "What is -h(-x) equal to?", choices: ["$$\\frac{-\\left(1\\right)}{x}-\\left(3\\right) x$$", "$$\\frac{1}{x}+\\left(3\\right) x$$", "$$\\frac{1}{x}-\\left(3\\right) x$$", "$$\\frac{-\\left(1\\right)}{x}+\\left(3\\right) x$$"]}, {id: "transformation5a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["transformation5a-h6"], title: "Checking if h(x) is Even", text: "Does $$h x=h{\\left(-x\\right)}$$?", choices: ["Yes", "No"]}, {id: "transformation5a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["transformation5a-h7"], title: "Checking if h(x) is Odd", text: "Does $$h x=-h{\\left(-x\\right)}$$?", choices: ["Yes", "No"]}, ]; export {hints};
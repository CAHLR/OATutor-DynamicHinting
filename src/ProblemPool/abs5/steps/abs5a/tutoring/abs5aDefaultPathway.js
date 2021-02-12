var hints = [{id: "abs5a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute 0 for f(x)."}, {id: "abs5a-h2", type: "hint", dependencies: ["abs5a-h1"], title: "Isolate", text: "Isolate the $$absolute$$ value on one side of the equation."}, {id: "abs5a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$3=|x-\\left(1\\right)|$$"], dependencies: ["abs5a-h2"], title: "Isolate", text: "What do we get after the isolation?", choices: ["$$3=|x-\\left(1\\right)|$$", "$$-\\left(3\\right)=|x-\\left(1\\right)|$$", "$$2=|x-\\left(1\\right)|$$"]}, {id: "abs5a-h4", type: "hint", dependencies: ["abs5a-h3"], title: "Separate", text: "Break the above equation into two separate equations and solve."}, {id: "abs5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["abs5a-h4"], title: "Separate", text: "What do we get for x after solving $$3=x-\\left(1\\right)$$?"}, {id: "abs5a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2"], dependencies: ["abs5a-h5"], title: "Separate", text: "What do we get for x after solving $$-\\left(3\\right)=x-\\left(1\\right)$$?"}, ]; export {hints};
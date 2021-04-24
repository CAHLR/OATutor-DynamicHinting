var hints = [{id: "SubAdd23a-h1", type: "hint", dependencies: [], title: "Rearrangement", text: "Rearrange the terms, using the distributive law of multiplication and the commutative property of addition. Combine like terms.", variabilization: {}}, {id: "SubAdd23a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["q+8=-8"], dependencies: ["SubAdd23a-h1"], title: "Simplification", text: "Simplify the equation of each side.", variabilization: {}}, {id: "SubAdd23a-h3", type: "hint", dependencies: ["SubAdd23a-h2"], title: "Isolation", text: "Isolate the variable.", variabilization: {}}, {id: "SubAdd23a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["q=-16"], dependencies: ["SubAdd23a-h3"], title: "Isolation", text: "Isolate q.", variabilization: {}}, {id: "SubAdd23a-h5", type: "hint", dependencies: ["SubAdd23a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "SubAdd23a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd23a-h5"], title: "Verification", text: "Check whether $$\\left(4\\right) \\left(\\left(-1\\right)6+\\left(2\\right)\\right)-\\left(3\\right) \\left(-1\\right)6$$ equals -8.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};
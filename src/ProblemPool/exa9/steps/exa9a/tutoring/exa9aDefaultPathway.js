var hints = [{id: "exa9a-h1", type: "hint", dependencies: [], title: "Multiply", text: "Multiply the outside value with each of the inside parenthesis values", variabilization: {}}, {id: "exa9a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(12\\right) p^2$$"], dependencies: ["exa9a-h1"], title: "Multiply pt2", text: "What is 2p times 6p?", variabilization: {}}, {id: "exa9a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2pr"], dependencies: ["exa9a-h2"], title: "Multiply pt3", text: "What is 2p times r?", variabilization: {}}, {id: "exa9a-h4", type: "hint", dependencies: ["exa9a-h3"], title: "Combine", text: "Combine the values multiplied", variabilization: {}}, ]; export {hints};
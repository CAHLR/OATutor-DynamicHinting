var hints = [{id: "Multiply25a-h1", type: "hint", dependencies: [], title: "Translate", text: "We first need to translate the phrase to expressions with integers."}, {id: "Multiply25a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(3\\right)+-\\left(15\\right)+\\left(7\\right)$$"], dependencies: ["Multiply25a-h1"], title: "Translate", text: "What do we get after translating?", choices: ["$$\\left(3\\right)--\\left(15\\right)+\\left(7\\right)$$", "$$\\left(3\\right)+-\\left(15\\right)+\\left(7\\right)$$", "$$\\left(3\\right)+-\\left(15\\right)-\\left(7\\right)$$", "(3-(-15))-7"]}, {id: "Multiply25a-h3", type: "hint", dependencies: ["Multiply25a-h2"], title: "Simplify", text: "Now, we want to simplify the expression."}, {id: "Multiply25a-h4", type: "hint", dependencies: ["Multiply25a-h3"], title: "Simplify", text: "We first need to add inside parentheses."}, {id: "Multiply25a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-12"], dependencies: ["Multiply25a-h4"], title: "Add", text: "What do we get for $$\\left(3\\right)+-\\left(15\\right)$$?"}, {id: "Multiply25a-h6", type: "hint", dependencies: ["Multiply25a-h5"], title: "Add", text: "Lastly, we need to add -12 with 7."}, {id: "Multiply25a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5"], dependencies: ["Multiply25a-h6"], title: "Add", text: "What do we get after the addition?"}, ]; export {hints};
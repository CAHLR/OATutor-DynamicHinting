var hints = [{id: "spe26a-h1", type: "hint", dependencies: [], title: "Product of Conjugates Pattern", text: "We compare our expression to the product of conjugates pattern formula: $$\\left(a-b\\right) \\left(a+b\\right)=a^2-b^2$$.", variabilization: {}}, {id: "spe26a-h2", type: "hint", dependencies: ["spe26a-h1"], title: "Compare the Binomials", text: "$$\\left(a-b\\right) \\left(a+b\\right)$$ $$\\left(x-\\left(8\\right)\\right) \\left(x+\\left(8\\right)\\right)$$", variabilization: {}}, {id: "spe26a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x"], dependencies: ["spe26a-h2"], title: "Identify a", text: "What is a in the expression?", variabilization: {}}, {id: "spe26a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["spe26a-h3"], title: "Identify b", text: "What is b in the expression?", variabilization: {}}, {id: "spe26a-h5", type: "hint", dependencies: ["spe26a-h3", "spe26a-h4"], title: "Plug in the Terms", text: "Substitute $$a=x$$ and $$b=8$$ into the product of conjugates pattern formula: $$\\left(a-b\\right) \\left(a+b\\right)=a^2-b^2$$ $$\\left(x-\\left(8\\right)\\right) \\left(x+\\left(8\\right)\\right)=x^2-{\\left(8\\right)}^2$$", variabilization: {}}, {id: "spe26a-h6", type: "hint", dependencies: ["spe26a-h5"], title: "Simplify", text: "$$x^2-\\left(64\\right)$$", variabilization: {}}, ]; export {hints};
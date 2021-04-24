var hints = [{id: "rational4a-h1", type: "hint", dependencies: [], title: "Factor the expression", text: "Factoring is the process to split a product into a group of factors (a multiplication of simpler expressions).", variabilization: {}}, {id: "rational4a-h2", type: "hint", dependencies: ["rational4a-h1"], title: "Factor the expression", text: "Not all terms can be factored. Factor the terms that can be split further.", variabilization: {}}, {id: "rational4a-h3", type: "hint", dependencies: ["rational4a-h2"], title: "Factor the expression", text: "In this case, we should factor the denominators since they can be broken into individual factors.", variabilization: {}}, {id: "rational4a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x+2)^2"], dependencies: ["rational4a-h3"], title: "Factor the expression", text: "What does $$x^2+\\left(4\\right) x+\\left(4\\right)$$ factor to?", variabilization: {}}, {id: "rational4a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x+2)(x-2)"], dependencies: ["rational4a-h4"], title: "Factor the expression", text: "What does $$x^2-\\left(4\\right)$$ factor to?", variabilization: {}}, {id: "rational4a-h6", type: "hint", dependencies: ["rational4a-h5"], title: "The least common multiple", text: "The LCM or least common multiple of a set of numbers is the smallest positive integer that is divisible by all those numbers.", variabilization: {}}, {id: "rational4a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x+2)^2(x-2)"], dependencies: ["rational4a-h6"], title: "The least common multiple", text: "To combine the fractions, we want to find the LCM of the denominators. What is it?", variabilization: {}}, {id: "rational4a-h8", type: "hint", dependencies: ["rational4a-h7"], title: "Multiplication by 1", text: "We must multiple each expression by the appropriate form of 1 to obtain xy as the denominator for each fraction.", variabilization: {}}, {id: "rational4a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x-2"], dependencies: ["rational4a-h8"], title: "Multiplication by 1", text: "What should we multiply to $$\\frac{6}{x^2+\\left(4\\right) x+\\left(4\\right)}$$ so that its denominator becomes $${\\left(x+\\left(2\\right)\\right)}^2 \\left(x-\\left(2\\right)\\right)$$?", variabilization: {}}, {id: "rational4a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x+2"], dependencies: ["rational4a-h9"], title: "Multiplication by 1", text: "What should we multiply to $$\\frac{2}{x^2-\\left(4\\right)}$$ so that its denominator becomes $${\\left(x+\\left(2\\right)\\right)}^2 \\left(x-\\left(2\\right)\\right)$$?", variabilization: {}}, {id: "rational4a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4(x-4)/(x+2)^2(x-2)"], dependencies: ["rational4a-h10"], title: "Adding Terms", text: "Now that both terms have the same denominator, we can add their numerators. What is our final answer?", variabilization: {}}, ]; export {hints};
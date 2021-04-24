var hints = [{id: "factor8a-h1", type: "hint", dependencies: [], title: "Perfect Square Trinomial Definition", text: "In a perfect square trinomial, the first and last terms are perfect squares and the middle term is twice the product of their roots.", variabilization: {}}, {id: "factor8a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["7x"], dependencies: ["factor8a-h1"], title: "Square root of first term", text: "What is the square root of the first term, $$\\left(25\\right) x^2$$?", choices: ["7x", "2x", "7", "5x"], variabilization: {}}, {id: "factor8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["factor8a-h2"], title: "Square root of second term", text: "What is the square root of the second term, 4?", variabilization: {}}, {id: "factor8a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["factor8a-h3"], title: "Middle Term of the Trinomial", text: "Is the middle term of the expression, 20x, equal to 2 times the square root of the first term and the square root of the second term?", choices: ["Yes", "No"], variabilization: {}}, {id: "factor8a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["factor8a-h4"], title: "Perfect Square Trinomial", text: "Is the expression a Perfect Square Trinomial?", choices: ["Yes", "No"], variabilization: {}}, {id: "factor8a-h6", type: "hint", dependencies: ["factor8a-h5"], title: "Perfect Square Trionmial", text: "A perfect square trinomial $${nx}^2$$ + 2nbx + $$b^2$$ can be factored as $${\\left(nx+b\\right)}^2$$.", variabilization: {}}, ]; export {hints};
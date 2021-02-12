var hints = [{id: "quad18a-h1", type: "hint", dependencies: [], title: "Nature of a Quadratic Equation Definition", text: "The nature of a quadratic equation is whether the solutions are real of complex numbers, and how many solutions of each type to expect."}, {id: "quad18a-h2", type: "hint", dependencies: ["quad18a-h1"], title: "Discriminant Definition", text: "For $${ax}^2+bx+c=0$$, where a, b, and c are real numbers, the discriminant is the expression under the radical in the quadratic formula: $$b^2-\\left(4\\right) ac$$."}, {id: "quad18a-h3", type: "hint", dependencies: ["quad18a-h2"], title: "Interpreting Discriminant Values", text: "If the discriminant is 0, there is one rational solution (double solution.) If the discriminant is greater than 0, if has two rational values if it is a perfect square, and two irrational values if it is not. If the discriminant is less than 0, it has two complex solutions."}, {id: "quad18a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["quad18a-h1", "quad18a-h2", "quad18a-h3"], title: "Identity of $$b^2$$", text: "Using the equation, which is given in the form $${ax}^2+bx+c=0$$, what is $$b^2$$?"}, {id: "quad18a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["quad18a-h1", "quad18a-h2", "quad18a-h3"], title: "Identity of 4ac", text: "Using the equation, which is given in the form $${ax}^2+bx+c=0$$, what is 4ac?"}, ]; export {hints};
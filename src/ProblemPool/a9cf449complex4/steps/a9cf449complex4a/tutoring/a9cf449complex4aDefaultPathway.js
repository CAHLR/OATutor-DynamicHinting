var hints = [{id: "a9cf449complex4a-h1", type: "hint", dependencies: [], title: "Writing the Problem As an Expression", text: "First, write the problem as an expression: $$3-4i-2+5i$$.", variabilization: {}}, {id: "a9cf449complex4a-h2", type: "hint", dependencies: ["a9cf449complex4a-h1"], title: "Rewriting the Expression by Distributing the Negative Sign", text: "Second, distribute the negative sign and rewrite the expression as an addition problem. For example, $$a+b-c+d=a+b-c-d$$.", variabilization: {}}, {id: "a9cf449complex4a-h3", type: "hint", dependencies: ["a9cf449complex4a-h2"], title: "Adding Complex Numbers", text: "The next step to add complex numbers is to add real and imaginary parts separately.", variabilization: {}}, {id: "a9cf449complex4a-h4", type: "hint", dependencies: ["a9cf449complex4a-h3"], title: "i Definition", text: "i represents the square root of -1, which is an imaginary number.", variabilization: {}}, {id: "a9cf449complex4a-h5", type: "hint", dependencies: ["a9cf449complex4a-h3"], title: "Real Numbers in the Expression", text: "3 and -2 are real numbers.", variabilization: {}}, {id: "a9cf449complex4a-h6", type: "hint", dependencies: ["a9cf449complex4a-h3"], title: "Imaginary Numbers in the Expression", text: "-4i and -5i are imaginary numbers.", variabilization: {}}, {id: "a9cf449complex4a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["a9cf449complex4a-h5"], title: "Sum of the Real Numbers", text: "What is the sum of the real numbers?", variabilization: {}}, {id: "a9cf449complex4a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9i"], dependencies: ["a9cf449complex4a-h6"], title: "Sum of the Imaginary Numbers", text: "What is the sum of the imaginary numbers?", variabilization: {}}, {id: "a9cf449complex4a-h9", type: "hint", dependencies: ["a9cf449complex4a-h7", "a9cf449complex4a-h8"], title: "Writing the Final Answer", text: "Finally, write the expression as the sum of the real and imaginary numbers.", variabilization: {}}, ]; export {hints};
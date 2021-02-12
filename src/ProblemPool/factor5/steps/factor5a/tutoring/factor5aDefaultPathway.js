var hints = [{id: "factor5a-h1", type: "hint", dependencies: [], title: "Factor the expression", text: "To factor a trionomial $${ax}^2+bx+c$$, the first step is to find p and q, a pair of factors of ac with a sum of b."}, {id: "factor5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-30"], dependencies: ["factor5a-h1"], title: "Product of Numbers", text: "What is $$-\\left(3\\right) \\left(10\\right)$$?"}, {id: "factor5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["factor5a-h2"], title: "Sum of Numbers", text: "What is $$-\\left(3\\right)+\\left(10\\right)$$?"}, {id: "factor5a-h4", type: "hint", dependencies: ["factor5a-h3"], title: "Rewriting the Expression", text: "The second step is to rewrite the original expression as $${ax}^2+px+qx+c$$."}, {id: "factor5a-h5", type: "hint", dependencies: ["factor5a-h4"], title: "Greatest Common Factor (GCF)", text: "Thirdly, pull out the GCF of $${ax}^2+px$$."}, {id: "factor5a-h6", type: "hint", dependencies: ["factor5a-h5"], title: "Greatest Common Factor (GCF)", text: "Then, pull out the GCF of $$qx+c$$."}, {id: "factor5a-h7", type: "hint", dependencies: ["factor5a-h6"], title: "Factoring out the GCF", text: "Lastly, factor out the GCF of the expression."}, ]; export {hints};
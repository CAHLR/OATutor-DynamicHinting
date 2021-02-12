var hints = [{id: "quad26a-h1", type: "hint", dependencies: [], title: "Factoring", text: "Look for two numbers whose product equals -6 and whose sum equals -5."}, {id: "quad26a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6, 1"], dependencies: ["quad26a-h1"], title: "Factoring", text: "Look at the possible factors of -6. Which pair of factors is equal -5?"}, {id: "quad26a-h3", type: "hint", dependencies: ["quad26a-h2"], title: "Factoring", text: "The factors will be $$\\left(x-\\left(6\\right)\\right) \\left(x+\\left(5\\right)\\right)=0$$. Solve the equation."}, {id: "quad26a-h4", type: "hint", dependencies: ["quad26a-h3"], title: "Zero-Product Property", text: "Use the zero-product property. Set each factor equal to zero and solve."}, {id: "quad26a-h5", type: "hint", dependencies: ["quad26a-h4"], title: "Zero-Product Property", text: "Solve $$x-\\left(6\\right)=0$$."}, {id: "quad26a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["quad26a-h5"], title: "Solving Equations", text: "What is x equal to?"}, {id: "quad26a-h7", type: "hint", dependencies: ["quad26a-h4"], title: "Zero-Product Property", text: "Solve $$x+\\left(1\\right)=0$$."}, {id: "quad26a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["quad26a-h7"], title: "Solving Equations", text: "What is x equal to?"}, {id: "quad26a-h9", type: "hint", dependencies: ["quad26a-h6", "quad26a-h8"], title: "X-Intercepts", text: "The solutions are the x-intercepts of $$y=x^2-\\left(5\\right) x-\\left(6\\right)$$"}, ]; export {hints};
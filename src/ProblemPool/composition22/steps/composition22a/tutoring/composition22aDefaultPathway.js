var hints = [{id: "composition22a-h1", type: "hint", dependencies: [], title: "Composition", text: "Remember that to solve f(g(2)), we need to first find the value of g(2), then plug that value in to f(x)."}, {id: "composition22a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["composition22a-h1"], title: "Finding g(2)", text: "To find g(2), we need to plug in 2 for the x in the function g: 3(2)-5. What is g(2)?", subHints: [{id: "composition22a-h2-s1", type: "hint", dependencies: [], title: "Multiplication", text: "Based off the Order of Operations, the first step is the multiplication: $$\\left(3\\right) \\left(2\\right)=6$$."}, {id: "composition22a-h2-s2", type: "hint", dependencies: ["composition22a-h2-s1"], title: "Subtraction", text: "Now, we need to subtract 5 from 6. $$\\left(6\\right)-\\left(5\\right)=1$$"}]}, {id: "composition22a-h3", type: "hint", dependencies: ["composition22a-h2"], title: "Finding f(g(2))", text: "Now, we can plug in the value of g(2) as the x into f(x). In other words, we are evaluating f(1)."}, {id: "composition22a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["composition22a-h3"], title: "Finding f(1)", text: "To find f(1), we plug in 1 for all x in f(x), and we get the expression $$\\left(2\\right) {\\left(1\\right)}^2+\\left(1\\right)$$. What does this evaluate to?"}, ]; export {hints};
var hints = [{id: "Absolute1a-h1", type: "hint", dependencies: [], title: "Setting y to zero", text: "To find the x-intercept of a function, we start by setting the y value to 0, so we get the equation $$|\\left(2\\right) x-\\left(4\\right)|-\\left(3\\right)=0$$."}, {id: "Absolute1a-h2", type: "hint", dependencies: ["Absolute1a-h1"], title: "Isolating the $$absoluate$$ value", text: "Then, we should isolate the part with $$absolute$$ value. We get the equation $$|\\left(2\\right) x-\\left(4\\right)|=3$$."}, {id: "Absolute1a-h3", type: "hint", dependencies: ["Absolute1a-h2"], title: "Solving equation with $$absoluate$$ values", text: "We can break an equation with $$absolute$$ values down into two equations that we can solve independently. We notice that the $$absolute$$ value will be equal to 3 if the quantity inside the $$absolute$$ value is 3 or -3. Therefore, the two equations we get are $$\\left(2\\right) x-\\left(4\\right)=3$$ and $$\\left(2\\right) x-\\left(4\\right)=-\\left(3\\right)$$."}, {id: "Absolute1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7/2"], dependencies: ["Absolute1a-h3"], title: "Solving the first equation", text: "Solve the equation $$\\left(2\\right) x-\\left(4\\right)=3$$. What is x?"}, {id: "Absolute1a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/2"], dependencies: ["Absolute1a-h3"], title: "Solving the second equation", text: "Solve the equation $$\\left(2\\right) x-\\left(4\\right)=-\\left(3\\right)$$. What is x?"}, ]; export {hints};
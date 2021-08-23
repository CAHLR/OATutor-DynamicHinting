var hints = [{id: "add30d-h1", type: "hint", dependencies: [], title: "Simplify Both Sides", text: "We want to start by simplifying both sides and comparing the simplified value. Since the left hand side is already simplified, all we need to do is to evaluate the right hand side.", variabilization: {}}, {id: "add30d-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["add30d-h1"], title: "Right Hand Side", text: "What does $$|-\\left(1\\right)|$$ evaluate to?", subHints: [{id: "add30d-h2-s1", type: "hint", dependencies: [], title: "Right Hand Side", text: "The absolute value of a number is its distance from 0 on the number line. Distance is never negative, so the absolute value is never negative.", variabilization: {}}], variabilization: {}}, {id: "add30d-h3", type: "hint", dependencies: ["add30d-h2"], title: "Comparing Numbers", text: "Now we are left to compare -1 and 1. Since -1 is to the left of 1 on the number line, we say $$-\\left(1\\right)<1$$. Therefore, $$-\\left(1\\right)<|-\\left(1\\right)|$$.", variabilization: {}}, ]; export {hints};
var hints = [{id: "explog9a-h1", type: "hint", dependencies: [], title: "Using substitution", text: "Substitute $$e^x$$ with another variable. What does the equation look like? Substitue that variable into the equation.", variabilization: {}}, {id: "explog9a-h2", type: "hint", dependencies: ["explog9a-h1"], title: "Factoring", text: "The next step is to factor the equation by the FOIL method and solve for x.", variabilization: {}}, {id: "explog9a-h3", type: "hint", dependencies: [], title: "Solving for x", text: "The last step is to substitute $$e^x$$ back into the equation and solve for x. Eliminate any extraneous solutions.", variabilization: {}}, {id: "explog9a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["y > 0"], dependencies: ["explog9a-h3"], title: "Extraneous solutions", text: "What is the range of the function y $$=$$ $$e^x$$?", choices: ["y > 0", "y < 0", "All real numbers"], variabilization: {}}, ]; export {hints};
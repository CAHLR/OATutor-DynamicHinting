var hints = [{id: "geo5a-h1", type: "hint", dependencies: [], title: "Draw", text: "Draw the figure to try to better understand what the problem is asking", variabilization: {}}, {id: "geo5a-h2", type: "hint", dependencies: ["geo5a-h1"], title: "Identify and Name", text: "We are looking for all three angles and we can name them all. \"x\" is the first angle, $$\"x+\\left(20\\right)\"$$ is the second angle, and 90 is the third angle because it is a right triangle.", variabilization: {}}, {id: "geo5a-h3", type: "hint", dependencies: ["geo5a-h2"], title: "Translate", text: "Each of the three angles added together equals 180 degrees, $$x+x+\\left(20\\right)+\\left(90\\right)=180$$", variabilization: {}}, {id: "geo5a-h4", type: "hint", dependencies: ["geo5a-h3"], title: "Solve", text: "Solve the equation using algebra", variabilization: {}}, {id: "geo5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2x+110"], dependencies: ["geo5a-h4"], title: "Solve", text: "First let's simplify the left side of the equation. What is $$x+x+\\left(20\\right)+\\left(90\\right)$$?", variabilization: {}}, {id: "geo5a-h6", type: "hint", dependencies: ["geo5a-h5"], title: "Solve", text: "Now, we can subtract 110 from both sides of the equation to find 2x", variabilization: {}}, {id: "geo5a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["70"], dependencies: ["geo5a-h6"], title: "Solve", text: "What is 180-110?", variabilization: {}}, {id: "geo5a-h8", type: "hint", dependencies: ["geo5a-h7"], title: "Solve", text: "Now, we have $$2x=70$$, so we can divide both sides by 2 to get x.", variabilization: {}}, {id: "geo5a-h9", type: "hint", dependencies: ["geo5a-h8"], title: "Solve", text: "After we found x, we know that the other angle is $$\\left(20\\right)+x$$, and the final angle is 90", variabilization: {}}, ]; export {hints};
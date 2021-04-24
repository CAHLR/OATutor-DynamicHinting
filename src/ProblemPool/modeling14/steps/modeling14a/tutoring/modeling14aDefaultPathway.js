var hints = [{id: "modeling14a-h1", type: "hint", dependencies: [], title: "Joint Variation", text: "Joint variation occurs when a variable varies directly or inversely with multiple variables. For instance, if x varies directly with both y and z, we have $$x=k y z$$. If x varies directly with y and inversely with z, we have $$x=\\frac{k y}{z}$$. Notice that we only use one constant in a joint variation equation.", variabilization: {}}, {id: "modeling14a-h2", type: "hint", dependencies: ["modeling14a-h1"], title: "General Formula", text: "What is the general formula for y that varies directly with x and the square root of z?", variabilization: {}}, {id: "modeling14a-h3", type: "hint", dependencies: ["modeling14a-h2"], title: "Determining the Constant of Variation, k.", text: "Make k the subject and substitute values to solve for k.", variabilization: {}}, {id: "modeling14a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x*sqrt(z)"], dependencies: ["modeling14a-h3"], title: "Making k the Subject", text: "What variables do you divide on both sides to isolate k?", variabilization: {}}, {id: "modeling14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["modeling14a-h4"], title: "Substitution", text: "What is k equals to after substituting $$x=2$$, $$y=100$$ and $$z=25$$?", variabilization: {}}, {id: "modeling14a-h6", type: "hint", dependencies: ["modeling14a-h5"], title: "Equation", text: "Now that you've found k, substitute k back into the equation that describes the relationship between the variables.", variabilization: {}}, ]; export {hints};
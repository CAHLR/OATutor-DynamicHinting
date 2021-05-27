var hints = [{id: "logarithmic14a-h1", type: "hint", dependencies: [], title: "Properties of Logarithms", text: "Some important properties of logarithms:\\n1) $$log(b,1)=0\\\\n2)$$ $$log(b,b)=1\\\\n3)$$ Inverse Property: log(b,b**x)=x, b**log(b,x)=x,x>0\\n4) One-to-One Property: $$log(b,M)=log(b,N)$$ if and only if $$M=N$$", variabilization: {}}, {id: "logarithmic14a-h2", type: "hint", dependencies: ["logarithmic14a-h1"], title: "Exponent", text: "Since the expression is in base 8, we can express the each term inside the logarithmic expressions with base 8.", variabilization: {}}, {id: "logarithmic14a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1/3"], dependencies: ["logarithmic14a-h2"], title: "Exponent", text: "In $$6*log(8,2),$$ what is the exponent,b, of 8 such that $${\\left(8\\right)}^b=2$$?", variabilization: {}}, {id: "logarithmic14a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["logarithmic14a-h3"], title: "Exponent", text: "In log(8,64), what is the exponent,b, of 8 such that $${\\left(8\\right)}^b=64$$?", variabilization: {}}, {id: "logarithmic14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2/3"], dependencies: ["logarithmic14a-h4"], title: "Exponent", text: "In $$3*log(8,4),$$ what is the exponent,b, of 8 such that $${\\left(8\\right)}^b=4$$?", variabilization: {}}, {id: "logarithmic14a-h6", type: "hint", dependencies: ["logarithmic14a-h5"], title: "Apply the Power Rule for Logarithms", text: "Now that we have found all the exponent of each logarithmic expressions, write the equivalent expression by multiplying the exponent times the logarithm of the base. What is the expression now?", variabilization: {}}, {id: "logarithmic14a-h7", type: "hint", dependencies: ["logarithmic14a-h6"], title: "Use the Properties of Logarithms", text: "We can use the fact that $$log(b,b)=1$$ in our expression to simplify the expression. What is the simplified expression after applying the properties?", variabilization: {}}, ]; export {hints};
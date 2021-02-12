var hints = [{id: "complex12a-h1", type: "hint", dependencies: [], title: "Distributive Property", text: "The first step is to apply the Distributive Property, which turns our expression into $$\\left(3\\right) i \\left(5\\right)+\\left(3\\right) i -\\left(2\\right) i$$."}, {id: "complex12a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["15i"], dependencies: ["complex12a-h1"], title: "Simple Multiplication", text: "What is $$\\left(3\\right) i \\left(5\\right)$$?"}, {id: "complex12a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["complex12a-h1"], title: "Simple Multiplication", text: "What is $$\\left(3\\right) i -\\left(2\\right) i$$?", subHints: [{id: "complex12a-h3-s1", type: "hint", dependencies: [], title: "Distributive Property", text: "Because i is the square root of -1, when we multiply (3i)(-2i), the i is squared and becomes -1. So, (3i)(-2i) becomes (-6)(-1), or 6."}]}, {id: "complex12a-h4", type: "hint", dependencies: ["complex12a-h2", "complex12a-h3"], title: "Standard Form", text: "Finally, we can write the expression in $$a+bi$$ form: $$\\left(6\\right)+\\left(15\\right) i$$."}, ]; export {hints};
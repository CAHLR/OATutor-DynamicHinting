var hints = [{id: "hyperbola22a-h1", type: "hint", dependencies: [], title: "Finding \"a\"", text: "The vertices are (3,0) and (-3,0), so $$a=3$$ and $$a^2=9$$", variabilization: {}}, {id: "hyperbola22a-h2", type: "hint", dependencies: ["hyperbola22a-h1"], title: "Finding \"c\"", text: "The foci is (5,0), so $$c=5$$ and $$c^2=25$$", variabilization: {}}, {id: "hyperbola22a-h3", type: "hint", dependencies: ["hyperbola22a-h2"], title: "Finding \"b\"", text: "To solve for $$b^2$$ use $$b^2=c^2-a^2$$ and plug in known values $$b^2=25-9=16$$", variabilization: {}}, {id: "hyperbola22a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{x^2}{9}-\\left(\\frac{y^2}{16}\\right)=1$$"], dependencies: ["hyperbola22a-h3"], title: "Substitute All Values", text: "Substitute $$a^2$$ and $$b^2$$ into the standard equation form, $$\\frac{x^2}{a^2}-\\left(\\frac{y^2}{b^2}\\right)=1$$", variabilization: {}}, ]; export {hints};
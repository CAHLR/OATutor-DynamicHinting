var hints = [{id: "cou4a-h1", type: "hint", dependencies: [], title: "Add the Number of Options", text: "We can add the number of negative number options to the number of even number options to find the total number of options.", variabilization: {}}, {id: "cou4a-h2", type: "hint", dependencies: ["cou4a-h1"], title: "Number of Negatives", text: "There are 3 negative numbers: -5, -3, -1.", variabilization: {}}, {id: "cou4a-h3", type: "hint", dependencies: ["cou4a-h2"], title: "Number of Evens", text: "There are 3 even numbers: 2, 4, 6.", variabilization: {}}, {id: "cou4a-h4", type: "hint", dependencies: ["cou4a-h2", "cou4a-h3"], title: "Add the Number of Options", text: "# of negative number options+# of even number options \\n $$\\left(3\\right)+\\left(3\\right)=6$$", variabilization: {}}, {id: "cou4a-h5", type: "hint", dependencies: ["cou4a-h4"], title: "Total Ways", text: "There are 6 ways to choose a negative or an even number from A.", variabilization: {}}, ]; export {hints};
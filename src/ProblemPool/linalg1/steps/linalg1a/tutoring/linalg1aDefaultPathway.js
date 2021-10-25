var hints = [{id: "linalg1a-h1", type: "hint", dependencies: [], title: "Change of Basis Matrix", text: "The change of basis matrix from B to C is defined as $$P=[b_1]_c...[b_n]_c$$ .", variabilization: {}}, {id: "linalg1a-h2", type: "hint", dependencies: ["linalg1a-h1"], title: "Standard Basis", text: "If the change of basis matrix is equal to the identity matrix, $$[b_i]_c=e_i$$ where {$$e_1$$ ... $$e_n$$} is the standard basis for $$R^n$$ .", variabilization: {}}, {id: "linalg1a-h3", type: "hint", dependencies: ["linalg1a-h2"], title: "Coordinate Vector", text: "By definition of a coordinate vector, if $$[b_1]_c=(e_1)$$ means $$b_1=1*c_1+0*c_2+...+0*b_n=c_1$$ .", variabilization: {}}, {id: "linalg1a-h4", type: "hint", dependencies: ["linalg1a-h3"], title: "Extension of Coordinate vector Definition", text: "Similarly, $$b_2=c_2$$, ... $$b_n=c_n$$ .", variabilization: {}}, {id: "linalg1a-h5", type: "hint", dependencies: ["linalg1a-h4"], title: "Conclusion", text: "With the above information, we can conclude $$B=C$$.", variabilization: {}}, ]; export {hints};
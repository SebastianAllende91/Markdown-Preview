import marked from "marked";
import { useState } from "react";

const initialState = `
# heading element
## sub heading element 
[a link](www.google.com) **inline code**

this is inline code \`<div></div>\`


this is a code block
\`\`\`
  let x=1;
  let y=2;
  let z= x + y;
\`\`\`

this is a list
- list item 1
- list item 2
- list item 3

> Block Quotes! 

** this is bolded text **

![an image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [text, setText] = useState(initialState);

  const markdown = marked(text, { breaks: true });

  const changeText = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h1 className="title">Markdown Preview</h1>
      <div className="container">
        <div className="contenedor-editor">
          <h2 className="subtitle">Enter your markdown:</h2>
          <textarea
            name="editor"
            id="editor"
            cols="30"
            rows="10"
            value={text}
            onChange={changeText}
          ></textarea>
        </div>
        <div className="contenedor-preview">
          <h2 className="subtitle">The result is:</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;

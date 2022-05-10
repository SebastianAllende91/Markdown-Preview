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

const useMarkdown = () => {
  const [text, setText] = useState(initialState);

  const markdown = marked(text, { breaks: true });

  const changeText = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return { text, markdown, changeText };
};

export default useMarkdown;

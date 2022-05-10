import React from "react";

const Editor = ({ text, changeText }) => {
  return (
    <>
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
    </>
  );
};

export default Editor;

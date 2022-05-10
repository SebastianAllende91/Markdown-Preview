import React from "react";

const Preview = ({ markdown }) => {
  return (
    <>
      <div className="contenedor-preview">
        <h2 className="subtitle">The result is:</h2>
        <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
      </div>
    </>
  );
};

export default Preview;

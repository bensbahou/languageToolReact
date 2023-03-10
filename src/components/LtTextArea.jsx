import React, { useEffect } from "react";

function LtTextArea({ value, setValue }) {
  useEffect(() => {
    console.log("Value changed to : ", value);
  }, [value]);

  return (
    <div
      contentEditable
      style={{
        height: "100%",
        maxHeight: "340px",
        minHeight: "340px",
        border: "1px solid #ccc",
        padding: "10px",
        fontSize: "1.4rem",
      }}
      onInput={(e) => {
        setValue(e.target.innerText);
      }}
    >
      {value}
    </div>
  );
}

export default LtTextArea;

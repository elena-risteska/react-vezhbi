import { useState } from "react";

export function BackgroundSelector() {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
    document.body.style.backgroundColor = content;
  };

  function randomColor() {
    return Math.floor(Math.random() * 256);
  }

  function getColor() {
    document.body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  }

  return (
    <div>
      <input type="color" value={content} onChange={handleChange} />
      <button onClick={getColor}>random boja brat</button>
    </div>
  );
}

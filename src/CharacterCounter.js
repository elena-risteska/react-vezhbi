import { useState } from "react";

//ima problem so brojacho
export function CharacterCounter() {
  const [content, setContent] = useState("");
  const [color, setColor] = useState("black-text");
  const [counter, setCounter] = useState(0);
  const maxCounter = 10;

  function handleContent() {
    if (counter >= maxCounter) {
      setContent(content.substring(0, maxCounter));
    }
  }

  function handleColor() {
    if (counter > maxCounter - 5) {
      setColor("red-text");
    } else {
      setColor("black-text");
    }
  }

  const handleChange = (event) => {
    setCounter(event.target.value.length);
    setContent(event.target.value);
    handleContent();
    handleColor();
  };

  return (
    <div>
      <form action="">
        <textarea
          length={counter}
          value={content}
          onChange={handleChange}
        ></textarea>
        <div className={color}>
          Characters:
          <span> {counter}</span>/<span>{maxCounter}</span>
        </div>
      </form>
    </div>
  );
}

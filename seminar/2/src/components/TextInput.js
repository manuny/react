import React, { useState } from "react";

const TextInput = () => {
  // Инициализация состояния

  const [text, setText] = useState("");

  // Функция для текста
  const addText = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <p> {text} </p>
      <input type="text" onChange={addText} />
    </div>
  );
};
export default TextInput;

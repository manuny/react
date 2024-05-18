import React, { useState } from "react";

const TodoList = () => {
  // Состояние для хранения списка дел
  const [todos, setTodos] = useState([]);
  // Состояние для хранения текущего ввода в текстовом поле
  const [currentTodo, setCurrentTodo] = useState("");

  // Обработчик добавления нового дела в список
  const addTodo = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку формы
    if (!currentTodo.trim()) return; // Игнорируем пустые строки
    setTodos([...todos, currentTodo]); // Добавляем текущее дело в список
    setCurrentTodo(""); // Очищаем текстовое поле
  };

  // Обработчик изменения текстового поля
  const handleInputChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" value={currentTodo} onChange={handleInputChange} />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // Используем индекс как ключ, что подходит для данного примера
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import "./App.css";
import Box from "./components/Box";
import List from "./components/List";

/* const App = () => {
  return (
    <div>
      <h1>Пример использования компонента Box</h1>
      <Box>
        <p>Текст внутри Box</p>
      </Box>
      <Box>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      </Box>
      <Box>
        <div style={{ background: "lightblue", padding: "10px" }}>
          Другой компонент внутри Box
        </div>
      </Box>
    </div>
  );
};*/

const App = () => {
  // Массив элементов для списка
  const items = ["Пункт 1", "Пункт 2", "Пункт 3"];

  // Функция для рендеринга каждого элемента списка
  const renderItem = (item, index) => {
    // Пример условного стиля на основе индекса
    const style = { color: index % 2 === 0 ? "blue" : "red" };
    return <div style={style}>{item} - Уникальный стиль</div>;
  };

  return (
    <div>
      <h1>Пример списка с уникальными стилями</h1>
      <List items={items} renderItem={renderItem} />
    </div>
  );
};

export default App;

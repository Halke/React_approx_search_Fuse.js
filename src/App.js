import './App.css';
import books from "./books.json";
import Card from "./Card";

function App() {
  return (
    <div className="Container">
      {books.map((item) => (
        <Card {...item} key={item.name} />
      ))}
    </div>
  );
}

export default App;

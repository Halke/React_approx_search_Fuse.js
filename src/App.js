import {useState} from "react";
import './App.css';
import books from "./books.json";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Fuse from "fuse.js";

const fuse = new Fuse(books, {
  keys: ["title", "author"],
});

function App() {

  const [data, setData] = useState(books);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(books);
      return;
    }
    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
      matches.push(item);
    });
    setData(matches);
}
  }

  return (
    <div>
      <h1 className="Title">My Favorite books</h1>
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
       />
      <div className="Container">
        {data.map((item) => (
          <Card {...item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

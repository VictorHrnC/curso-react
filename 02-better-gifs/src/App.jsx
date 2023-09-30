import { useState } from "react";
import "./App.css";

export function App() {
  const gifs = [
    "https://media4.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47mjh2usjikdlr4m5ko2hfogdghunzqvw5kg5dkh7h&ep=v1_gifs_search&rid=200w.webp&ct=g",
    "https://media0.giphy.com/media/xNuoUMEJCdVKVm7r2x/200w.webp?cid=ecf05e47mjh2usjikdlr4m5ko2hfogdghunzqvw5kg5dkh7h&ep=v1_gifs_search&rid=200w.webp&ct=g",
    "https://media3.giphy.com/media/ewzF6uunnPn6L5amuW/200w.webp?cid=ecf05e47mjh2usjikdlr4m5ko2hfogdghunzqvw5kg5dkh7h&ep=v1_gifs_search&rid=200w.webp&ct=g",
  ];

  const [value, setValue] = useState(gifs);

  return (
    <div>
      <header className="header">
        <a className="img-logo">
          <img
            src="https://i.gifer.com/origin/93/935d72c7bc35828ea93b5898691f28fd_w200.gif"
            alt="logo"
            className="logo"
          />
        </a>
        <form action="" className="buscador">
          <input type="text" />
          <button>buscar</button>
        </form>
      </header>
      <section>
        {value.map((unGif, index) => (
          <img key={index} src={unGif} alt={`gif-${index}`} />
        ))}
      </section>
      <footer></footer>
    </div>
  );
}

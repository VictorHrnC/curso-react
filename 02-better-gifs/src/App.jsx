import { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

export function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(function () {
    getGifs().then((gifs) => setGifs(gifs));
  });

  return (
    <div>
      <header className="header">
        <a className="img-logo">
          <img
            src="https://i.gifer.com/origin/93/935d72c7bc35828ea93b5898691f28fd_w200.gif"
            alt="logo"
            className="logo"
          />
          <h1 className="nbtrg">Better Gifs</h1>
        </a>
        <form action="" className="buscador">
          <input type="text" />
          <button className="btnbus">buscar</button>
        </form>
      </header>
      <section className="gifs-section">
        {gifs.map((unGif) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="gif-div">
              <img
                className="gif-img"
                key={unGif.id}
                src={unGif.url}
                alt={unGif.title}
              />
            </div>
          );
        })}
      </section>
      <footer></footer>
    </div>
  );
}

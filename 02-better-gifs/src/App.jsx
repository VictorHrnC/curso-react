import { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

export function App() {
  const [gifs, setGifs] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const handleInputChange = ({ target }) => {
    setBusqueda(target.value);
  };
  useEffect(function () {
    getGifs({ keyWord: busqueda }).then((gifs) => setGifs(gifs));
  });
  return (
    <div className="div-gen">
      <header className="header">
        <a className="img-logo">
          <img
            src="https://i.gifer.com/origin/93/935d72c7bc35828ea93b5898691f28fd_w200.gif"
            alt="logo"
            className="logo"
          />
          <h1 className="nbtrg">Better Gifs</h1>
        </a>
        <form>
          <input
            className="bus-inp"
            type="text"
            name="kword"
            value={busqueda}
            onChange={handleInputChange}
          />
        </form>
      </header>
      <section className="gifs-section">
        {gifs.map((unGif) => (
          <div className="gif-div" key={unGif.id}>
            <img className="gif-img" src={unGif.url} alt={unGif.title} />
          </div>
        ))}
      </section>
      <footer></footer>
    </div>
  );
}

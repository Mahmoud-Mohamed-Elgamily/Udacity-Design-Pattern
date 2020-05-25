import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let updateClicks = id => e => {
    setCats(
      cats.map(cat => {
        return cat.id === id ? { ...cat, clicks: cat.clicks + 1 } : cat;
      })
    );
    setCat({ ...cat, clicks: cat.clicks + 1 });
  };

  let [cats, setCats] = useState([
    {
      id: 0,
      name: "koke",
      img: "https://getdrawings.com/images/cat-drawing-online-21.jpg",
      clicks: 0
    },
    {
      id: 1,
      name: "soso",
      img: "https://getdrawings.com/images/cat-drawing-20.png",
      clicks: 0
    },
    {
      id: 2,
      name: "fofo",
      img: "https://getdrawings.com/images/cat-drawing-20.png",
      clicks: 0
    },
    {
      id: 3,
      name: "nono",
      img: "https://getdrawings.com/images/cat-drawing-20.png",
      clicks: 0
    },
    {
      id: 4,
      name: "lolo",
      img: "https://getdrawings.com/images/cat-drawing-20.png",
      clicks: 0
    }
  ]);

  let [cat, setCat] = useState(cats[0]);

  let catList = cats.map(cat => {
    return (
      <li
        style={{
          width: "fit-content",
          margin: "5px auto",
          listStyle: "none",
          backgroundColor: "gray",
          padding: "3px 10px",
          color: "white"
        }}
        key={cat.id}
        onClick={() => {
          setCat((cat = cats[cat.id]));
        }}
      >
        {cat.name}
      </li>
    );
  });

  return (
    <div className="App">
      <div className="row">
        <ul className="col-5 mt-4">{catList}</ul>
        <div key={cat.id} className="col-5">
          <h1> {cat.name}</h1>
          <img
            src={cat.img}
            alt={cat.name}
            height="130px"
            onClick={updateClicks(cat.id)}
          />
          <h1>{cat.clicks}</h1>
        </div>
      </div>
    </div>
  );
}

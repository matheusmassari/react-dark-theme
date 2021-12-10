import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function getStorageTheme() {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
}

const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  function handleTheme() {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    }
    if (theme === "dark-theme") {
      setTheme("light-theme");
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
    // document.getElementById("root").classList.add(theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="btn" onClick={() => handleTheme()}>
            toggle
          </button>
        </div>
        <section className="articles">
          {data.map((item) => {
            return <Article key={item.id} {...item} />;
          })}
        </section>
      </nav>
    </main>
  );
};

export default App;

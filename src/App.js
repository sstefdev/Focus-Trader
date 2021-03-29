import React from "react";

import HomePage from "./components/pages/HomePage";
import NavBar from "./components/common/NavBar";

const App = () => {
  return (
    <>
      <main className="container">
        <NavBar />
        <HomePage />
      </main>
    </>
  );
};

export default App;

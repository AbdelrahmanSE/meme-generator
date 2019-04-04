import React, { Component } from "react";
import "./App.scss";
import { Header } from "./components/header/Header";
import { MemesContainer } from "./components/memes-container/MemesContainer";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MemesContainer />
      </main>
    );
  }
}

export default App;

import type { Component } from "solid-js";
import { WidthChanger } from "./components/WidthChanger";
import "./styles/main.sass";

const App: Component = () => {
  return <div class="app">
    <WidthChanger />
  </div>;
};

export default App;

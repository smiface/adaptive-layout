import { Component, createSignal } from "solid-js";
import { WidthChanger } from "./components/WidthChanger";
import { Layout } from "./layouts/LayoutLg";
import { LayoutMain } from "./layouts/layoutMain";
import { layout } from "./store/main";
import "./styles/main.sass";

const App: Component = () => {

  return (
    <div class="app">
      <LayoutMain>
        <Layout size={layout()}>
          <h1>Title</h1>
        </Layout>
      </LayoutMain>
        <WidthChanger />
    </div>
  );
};

export default App;

import { Component, createEffect, createSignal } from "solid-js";
import { WidthChanger } from "./components/WidthChanger";
import { LayoutLG } from "./layouts/LayoutLg";
import { LayoutMain } from "./layouts/layoutMain";
import { LayoutMd } from "./layouts/layoutMd";
import { LayoutSm } from "./layouts/layoutSm";
import { LayoutXl } from "./layouts/LayoutXl";
import { LayoutXs } from "./layouts/LayoutXs";
import { LayoutXxl } from "./layouts/LayoutXxl";
import { layout, width } from "./store/main";
import "./styles/main.sass";

const als = {
  xs: <LayoutXs size={layout()} width={width()} />,
  sm: <LayoutSm size={layout()} width={width()} />,
  md: <LayoutMd size={layout()} width={width()} />,
  lg: <LayoutLG size={layout()} width={width()} />,
  xl: <LayoutXl size={layout()} width={width()} />,
  xxl: <LayoutXxl size={layout()} width={width()} />,
};

const App: Component = () => {
  

  return (
    <div class="app">
      <LayoutMain>
        {als[layout()]}
        {/* <Layout>
          <h1>Title {width() } </h1>
        </Layout> */}
      </LayoutMain>
      <WidthChanger />
    </div>
  );
};

export default App;

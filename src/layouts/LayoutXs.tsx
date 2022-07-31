import { Component, JSX, ParentProps } from "solid-js";
import { Header, Links, showMenu } from "../components/Header";

type LayoutProps = {
  children?: JSX.Element;
  size?: string;
  width?: string;
};

export const LayoutXs = (props: LayoutProps) => {
  return (
    <div class={"layout layout-" + props.size} style={{ width: props.width }}>
      <Header size="xs" />
      <div class={showMenu() ? "menu" : "menu hidden"}>
        <Links />
      </div>
      <h2>Layout Xs</h2>
    </div>
  );
};

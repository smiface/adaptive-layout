import { Component, JSX, ParentProps, Show } from "solid-js";
import { Header, Links, showMenu } from "../components/Header";

type LayoutProps = {
  children?: JSX.Element;
  size?: string;
  width?: string;
};

export const LayoutLG = (props: LayoutProps) => {
  return (
    <div class={"layout layout-" + props.size} style={{ width: props.width }}>
      <Header size="lg" />
      <h2>Layout Lg</h2>
    </div>
  );
};

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
      <aside class={showMenu() ? "hidden" : ""}>
        <Links />
      </aside>
      LayoutXs
    </div>
  );
};

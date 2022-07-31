import { Component, createEffect, JSX, ParentProps, Show } from "solid-js";
import { Header, Links, showMenu, toggleMenu } from "../components/Header";

type LayoutProps = {
  children?: JSX.Element;
  size?: string;
  width?: string;
};

export const LayoutSm = (props: LayoutProps) => {
  createEffect(() => {
    console.log(showMenu());
  });

  return (
    <div class={"layout layout-" + props.size} style={{ width: props.width }}>
      <Header size="sm" />
      LayoutSm
      <div class={showMenu() ? "menu" : "menu hidden"}>
        <Links />
      </div>
    </div>
  );
};

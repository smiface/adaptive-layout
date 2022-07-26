import { Component, JSX, ParentProps } from "solid-js";

type LayoutProps = {
  children:JSX.Element;
  size: string;
};

export const Layout = (props: LayoutProps) => {
  return <div class={"layout layout-" + props.size}>{props.children}</div>;
};

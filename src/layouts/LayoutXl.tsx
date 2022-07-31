import { Component, JSX, ParentProps } from "solid-js";
import { Header } from "../components/Header";

type LayoutProps = {
  children?: JSX.Element;
  size?: string;
  width?: string;
};

export const LayoutXl = (props: LayoutProps) => {
  return (
    <div class={"layout layout-" + props.size} style={{ width: props.width }}>
      <Header size="xl" />
      LayoutXl
    </div>
  );
};

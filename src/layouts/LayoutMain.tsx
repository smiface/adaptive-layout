import { Component, JSX, ParentProps } from "solid-js";
type ParentComponent<P = {}> = Component<ParentProps<P>>;

export const LayoutMain: ParentComponent = (props) => {
  return <div class="layoutMain">{props.children}</div>;
};

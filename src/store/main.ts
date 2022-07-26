import { createSignal } from "solid-js";

const layouts = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
type Layouts = typeof layouts[number];

const [layout, setLayout] = createSignal<Layouts>(layouts[5]);

export {layout, setLayout, layouts}
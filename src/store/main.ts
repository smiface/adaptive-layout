import { createEffect, createSignal } from "solid-js";
import { LayoutLG } from "../layouts/LayoutLg";
const layouts = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
type Layouts = typeof layouts[number];

enum Sizes {
  xs = 320,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1600,
}

const [layout, setLayout] = createSignal<Layouts>(layouts[5]);
const [width, setWidth] = createSignal("100%");
const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);

const inputMove = (number: number) => {
  setWidth(number + "%");

  //   select button with active size
  const elem = document.querySelector(".layout") as HTMLDivElement;
  const w = parseInt(window.getComputedStyle(elem).width);

  for (let i = 0; i < layouts.length; i++) {
    if (w < Sizes[layouts[i]]) {
      setLayout(layouts[i]);
      console.log(layouts[i]);
      break;
    }
  }
};

const setLayoutByButton = (string: Layouts) => {
  setWidth(Sizes[string] + "px");

  //   move input to active size
  const inp = document.querySelector("input") as HTMLInputElement;
  inp.value = Sizes[string] / 16 + "";
};

export { layout, setLayout, layouts, width, setWidth, inputMove, setLayoutByButton, windowWidth, setWindowWidth };

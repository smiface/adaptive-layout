import { createEffect, For, JSX, Show } from "solid-js";
import { layout, setLayout, layouts, inputMove, setLayoutByButton, setWindowWidth, windowWidth } from "../store/main";

export const WidthChanger = () => {
  createEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  });

  return (
    <div class="widthChanger">
      <Show when={windowWidth() > 1280}>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value="1"
          oninput={(e: InputEvent) => {
            const target = e.target as HTMLInputElement;
            inputMove(+target.value);
          }}
        />
      </Show>

      <div class="buttons">
        <For each={layouts}>
          {(l) => (
            <button
              class={`button ${layout() === l ? "active" : ""}`}
              onClick={() => {
                setLayout(l);
                setLayoutByButton(l);
              }}
            >
              {l}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};

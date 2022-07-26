import { For, JSX } from "solid-js";
import { layout, setLayout, layouts } from "../store/main";

export const WidthChanger = () => {
  return (
    <div class="widthChanger">
      <input type="range" min="1" max="100" step="1" value="1"
      oninput={(e:InputEvent) => console.log(e.target)}
      />
      <div class="buttons">
        <For each={layouts}>
          {(l) => (
            <button class={`button ${layout() === l ? "active" : ""}`} onClick={() => setLayout(l)}>
              {l}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};

import { createSignal, Show } from "solid-js";
import { layout, width, windowWidth } from "../store/main";

type HeaderProps = {
  size?: string | "";
};

const Links = () => {
  return (
    <>
      <a href="/">info</a>
      <a href="/">about us</a>
      <a href="/">terms</a>
      <a href="/">lorem</a>
    </>
  );
};

export const Header = (props: HeaderProps) => {
  const [showMenu, setShowMenu] = createSignal(false);
  const toggleLgMenu = () => setShowMenu(!showMenu());

  return (
    <header class={props.size}>
      <a href="/">
        <img src="/src/assets/logo.ico" alt="logo" />
      </a>

      <Show when={layout() == "xl" || layout() == "xxl"}>
        <Links />
      </Show>

      <Show when={layout() == "lg"}>
        <button onclick={() => toggleLgMenu()}>{showMenu() ? `Close menu` : `Open menu`}</button>
        <Show when={showMenu() === true}>
          <div>
            <Links />
          </div>
        </Show>
      </Show>

      <Show when={layout() == "md"}>
        <button onclick={() => toggleLgMenu()}> {showMenu() ? `less` : `more`} </button>
        <Show when={showMenu() === true}>
          <div>
            <Links />
          </div>
        </Show>
      </Show>

      <Show when={layout() == "xs"}>
        <button onclick={() => toggleLgMenu()}> {showMenu() ? `❌` : `☰`} </button>
        <Show when={showMenu() === true}>
          <div>
            <Links />
          </div>
        </Show>
      </Show>

      <Show when={ layout() == "sm"}>
        <button onclick={() => toggleLgMenu()}> {showMenu() ? `❌` : `☰`} </button>
        <Show when={showMenu() === true}>
          <div>
            <Links />
          </div>
        </Show>
      </Show>
    </header>
  );
};

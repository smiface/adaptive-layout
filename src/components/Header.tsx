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

const [showMenu, setShowMenu] = createSignal(false);
const toggleMenu = () => setShowMenu(!showMenu());

export const Header = (props: HeaderProps) => {
  return (
    <header class={props.size}>
      <a href="/">
        <img src="/src/assets/logo.ico" alt="logo" />
      </a>

      <Show when={layout() == "xl" || layout() == "xxl"}>
        <Links />
      </Show>

      <Show when={layout() == "lg"}>
        <div class="menu_wrapper">
          <button onclick={() => toggleMenu()}>{showMenu() ? `Close menu` : `Open menu`}</button>
          <Show when={showMenu() === true}>
            <div class="menu">
              <Links />
            </div>
          </Show>
        </div>
      </Show>

      <Show when={layout() == "md"}>
        <button onclick={() => toggleMenu()}> {showMenu() ? `less` : `more`} </button>
        <Show when={showMenu() === true}>
          <div>
            <Links />
          </div>
        </Show>
      </Show>

      <Show when={layout() == "xs" || layout() == "sm"}>
        <button onclick={() => toggleMenu()}> {showMenu() ? `❌` : `☰`} </button>
      </Show>
    </header>
  );
};

export { showMenu, toggleMenu, Links };

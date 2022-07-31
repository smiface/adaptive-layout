import { createSignal, Show } from "solid-js";
import { layout } from "../store/main";

type HeaderProps = {
  size?: string | "";
};

const [showMenu, setShowMenu] = createSignal(false);
const toggleMenu = () => setShowMenu(!showMenu());

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

const ContentLg = () => (
  <div class="menu_wrapper">
    <button onclick={() => toggleMenu()}>{showMenu() ? `Close menu` : `Open menu`}</button>
    <Show when={showMenu() === true}>
      <div class="menu">
        <Links />
      </div>
    </Show>
  </div>
);

const ContentMd = () => (
  <>
    <button onclick={() => toggleMenu()}> {showMenu() ? `less` : `more`} </button>
    <Show when={showMenu() === true}>
      <div>
        <Links />
      </div>
    </Show>
  </>
);

const ContentSm = () => <button onclick={() => toggleMenu()}> {showMenu() ? `❌` : `☰`} </button>;
const ContentXs = () => <button onclick={() => toggleMenu()}> {showMenu() ? `❌` : `☰`} </button>;

const content = {
  xxl: () => <Links />,
  xl: () => <Links />,
  lg: () => <ContentLg />,
  md: () => <ContentMd />,
  sm: () => <ContentSm />,
  xs: () => <ContentXs />,
};

export const Header = (props: HeaderProps) => {
  return (
    <header class={props.size}>
      <a href="/">
        <img src="/src/assets/logo.ico" alt="logo" />
      </a>

      {content[layout()]}
    </header>
  );
};

export { showMenu, toggleMenu, Links };

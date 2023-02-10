import { render } from "preact";
import { App } from "./app";
import { GlobalStyles } from "./styles/globalStyles";
import "./styles/reset.css";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("app")
);

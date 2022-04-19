import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client"; //

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
// UPDATE TO react 18 syntax.

// import { createRoot } from "react-dom/client";
// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

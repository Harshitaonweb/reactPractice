import React from "react";
import ReactDOM from "react-dom/client";
import {jsx as _jsx} from "react/jsx-dev-runtime.js"
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App | HR</h1>
    </div>
  );
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: 'blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    {" "}
    Visit Google
  </a>
);

const anotherUser = " Cookie and React";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "blank" },
  "click to visit google",
  anotherElement
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement); 

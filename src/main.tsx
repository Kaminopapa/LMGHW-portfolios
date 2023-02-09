import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

console.log(
  `%c Designed and developed with ❤️ by Luis Miguel Hung Wu  %c Version V1 %c`,
  "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
  "background:#489250 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
  "background:transparent"
);

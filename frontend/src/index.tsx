import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./index.css";
import Store from "./redux/store";
import AppLoader from "./layouts/AppLoader";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<AppLoader />}>
      <Provider store={Store} children={undefined}>
        <App />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);

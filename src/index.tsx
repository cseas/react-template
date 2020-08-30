import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { App } from "./App";
import { allReducers } from "src/reducers";
import "src/translations/i18n";
import { TranslateButtons } from "src/translations/TranslateButtons";
import * as serviceWorker from "./serviceWorker";

const store = configureStore({
  reducer: allReducers,
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Error">
      <Provider store={store}>
        <App />
      </Provider>
      <TranslateButtons />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

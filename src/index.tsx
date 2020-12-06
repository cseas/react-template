import { configureStore } from "@reduxjs/toolkit";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import "./index.css";
import { allReducers } from "./reducers";
import reportWebVitals from "./reportWebVitals";
import "./translations/i18n";
import { TranslateButtons } from "./translations/TranslateButtons";

const store = configureStore({
  reducer: allReducers,
});

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <TranslateButtons />
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

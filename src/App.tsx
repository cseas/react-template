import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./ui";
import {
  ErrorBoundary,
  QueryCacheProvider,
  ReduxProvider,
  TranslationsWrapper,
} from "./wrappers";

/* React.lazy only supports default exports
 * https://reactjs.org/docs/code-splitting.html#named-exports
 */
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Counter = lazy(() => import("./Counter"));
const User = lazy(() => import("./User"));

declare global {
  interface Window {
    SERVER_DATA: any;
  }
}

export function App() {
  return (
    <ErrorBoundary>
      <ReduxProvider>
        <QueryCacheProvider>
          <TranslationsWrapper>
            <BrowserRouter>
              <Navbar />
              <Suspense fallback={<div>"Loading.."</div>}>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/counter">
                    <Counter />
                  </Route>
                  <Route exact path="/user">
                    <User />
                  </Route>
                </Switch>
              </Suspense>
            </BrowserRouter>
          </TranslationsWrapper>
        </QueryCacheProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

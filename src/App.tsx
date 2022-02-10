import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="counter" element={<Counter />} />
                  <Route path="user" element={<User />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TranslationsWrapper>
        </QueryCacheProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

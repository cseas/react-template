import { render, RenderOptions } from "@testing-library/react";
import { ComponentType, ReactElement, ReactNode } from "react";
import { ReduxProvider } from "./wrappers";

type AllProvidersProps = {
  children?: ReactNode;
};

function AllTheProviders({ children }: AllProvidersProps): ReactElement {
  return <ReduxProvider>{children}</ReduxProvider>;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };

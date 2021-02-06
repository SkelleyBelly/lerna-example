import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemeProvider from "../ThemeProvider";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(<ThemeProvider>{ui}</ThemeProvider>, options);

export * from "@testing-library/react";

export { customRender as render };

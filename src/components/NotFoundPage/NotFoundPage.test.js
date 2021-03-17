import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./notFoundPage";
import ReactDOM from "react-dom";
describe("Not Found Page ", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test("renders Not Found Page", () => {
    render(<NotFound />, container);

    expect(container).toBeDefined();
  });
});

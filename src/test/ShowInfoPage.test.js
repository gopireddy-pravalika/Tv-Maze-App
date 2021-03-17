import React from "react";
import { render, act } from "@testing-library/react";
import ShowInfoPage from "../components/ShowInfoPage/showInfoPage";
import ShowInfo from "./testConstants/showInfoMock";
import ReactDOM from "react-dom";
import { Route, MemoryRouter } from "react-router-dom";
describe("Details Page ", () => {
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
    global.fetch.mockRestore();
  });
  test("renders showinfo page on page navigation", async () => {
    //test Details is loaded
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(ShowInfo),
    });
    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/movie/1"]}>
          <Route path="movie/:id">
            <ShowInfoPage />
          </Route>
        </MemoryRouter>,
        container
      );
    });
    expect(container).toBeDefined();
  });
  xtest("Should log error when Service is rejected", async () => {
    const error = new Error("Async error");
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockRejectedValueOnce(error),
    });
    console.log = jest.fn();
    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/movie/1"]}>
          <Route path="movie/:id">
            <ShowInfoPage />
          </Route>
        </MemoryRouter>,
        container
      );
    });
    expect(console.log).toHaveBeenCalledWith(error);
    global.fetch.mockRestore();
  });
});

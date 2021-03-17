import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import HomePage from "../components/HomePage/homePage";
import ReactDOM from "react-dom";
import showsListMock from "./testConstants/showListMock";
import { BrowserRouter as Router, Route, MemoryRouter } from "react-router-dom";
import Slider from "../components/slider/slider";
describe("Application ", () => {
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
  
  xtest("Should log error when Service is rejected", async () => {
    const error = new Error("Async error");
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockRejectedValueOnce(error),
    });
    console.log = jest.fn();
    await act(async () => {
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>,
        container
      );
    });
    expect(console.log).toHaveBeenCalledWith(error);
    global.fetch.mockRestore();
  })

  test("Should render full carousel when loaded", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Slider
            movieArray={showsListMock}
            tittle="Top Rated Movies"
          />
        </MemoryRouter>,
        container
      );
    });
    const movieArray = document.querySelector(
      "[data-testid=movieArray]"
    );
    expect(container).toBeDefined();
    expect(movieArray).toBeDefined();
  });

});
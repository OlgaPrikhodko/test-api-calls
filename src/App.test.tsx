import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import "@testing-library/jest-dom";

import { FETCH_ERROR_418, FETCH_ERROR_500 } from "./definitions/fetchErrors";
import { API_BASE_URL } from "./config/config";

import App from "./App";

describe("App component", () => {
  // declare which API requests to mock
  const server = setupServer(
    rest.get(`${API_BASE_URL}/people/4`, (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json({ name: "Darth Vader" }));
    })
  );

  // establish API mocking before all tests
  beforeAll(() => {
    server.listen();
  });
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers());
  // clean up once the tests are done
  afterAll(() => server.close());

  it("renders header", () => {
    render(<App />);
    const header = screen.getByText(/SWAPI - The Star Wars API/i);
    expect(header).toBeInTheDocument();
  });

  it("on successful API call, displays character name", async () => {
    render(<App />);
    const text = await screen.findByText(/Darth Vader/i);
    expect(text).toBeInTheDocument();
  });

  it("on server error 500, displays correct error message", async () => {
    server.use(
      rest.get(`${API_BASE_URL}/people/4`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<App />);

    const text = await screen.findByText(FETCH_ERROR_500);
    expect(text).toBeInTheDocument();
  });

  it("handles server error 418", async () => {
    server.use(
      rest.get(`${API_BASE_URL}/people/4`, (req, res, ctx) => {
        return res(ctx.status(418));
      })
    );
    render(<App />);

    const text = await screen.findByText(FETCH_ERROR_418);

    expect(text).toBeInTheDocument();
  });
});

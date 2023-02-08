import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./App";

describe("App component", () => {
  // declare which API requests to mock
  const server = setupServer(
    rest.get(`https://swapi.dev/api/people/4`, (req, res, ctx) => {
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

  it("loads and renders Fourth person", async () => {
    render(<App />);
    await screen.findAllByText(/Fourth Person from the Star War People/i);
    const text = screen.getByText(/Darth Vader/i);
    expect(text).toBeInTheDocument();
  });

  test("handles server error 500", async () => {
    server.use(
      rest.get("https://swapi.dev/api/people/4", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<App />);
    const text = screen.getByText(
      /Oops... something went wrong, try again 🤕/i
    );
    expect(text).toBeInTheDocument();
  });
});

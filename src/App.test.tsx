import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders header", () => {
    render(<App />);
    const linkElement = screen.getByText(/SWAPI - The Star Wars API/i);
    expect(linkElement).toBeInTheDocument();
  });
});

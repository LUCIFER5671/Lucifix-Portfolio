import { render, screen } from "@testing-library/react";
import App from "./App";

// Jest's SVG transform turns the file name into a component name, and "C++" isn't a valid one
jest.mock("./Assets/TechIcons/C++.svg", () => "cpp.svg");

// Canvas and animation libraries don't run in jsdom
jest.mock("./components/Particle", () => () => null);
jest.mock("typewriter-effect", () => () => null);
jest.mock("react-pdf", () => ({
  Document: () => null,
  Page: () => null,
  pdfjs: { GlobalWorkerOptions: {}, version: "test" },
}));

test("landing page shows name and role", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /roshkrishna k ranjith/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText("Graduate Researcher - AI & Robotics")
  ).toBeInTheDocument();
});

test("navigation links point to every page", () => {
  render(<App />);
  const routes = { Home: "/", About: "/about", Projects: "/project", Resume: "/resume" };
  for (const [name, path] of Object.entries(routes)) {
    expect(screen.getByRole("link", { name })).toHaveAttribute("href", path);
  }
});

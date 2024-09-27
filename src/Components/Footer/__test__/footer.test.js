import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("getbytext implementation", () => {
  render(<Footer title="company" />);
  const unorderlistElement = screen.getByText(/company/i);
  expect(unorderlistElement).toBeInTheDocument();
});

it("getbyrole implementation", async () => {
  render(<Footer title="company" />);
  const unorderlistElement = screen.getByTitle("Header");
  expect(unorderlistElement).toBeInTheDocument();
});

it("header id", async () => {
  render(<Footer title="company" />);
  const unorderlistElement = screen.getByTestId("header-1");
  expect(unorderlistElement).toBeInTheDocument();
});

// it("getby implementation", async () => {
//   render(<Footer />);
//   const unorderlistElement = screen.getByRole("list");
//   expect(unorderlistElement).toBeInTheDocument();
// });

//? FindBy
test("findby implementation", async () => {
  render(<Footer title="company" />);
  const unorderlistElement = await screen.findByText(/company/i);
  expect(unorderlistElement).toBeInTheDocument();
});

//? QueryBy
test("queryBytext implementation", async () => {
  render(<Footer title="company" />);
  const unorderlistElement = screen.queryByText(/cd/i);
  expect(unorderlistElement).not.toBeInTheDocument();
});

test("getAllBytext implementation", () => {
  render(<Footer />);
  const unorderlistElement = screen.getAllByRole("list");
  expect(unorderlistElement.length).toBe(5);
});

import { screen, render } from "@testing-library/react";
import SetUp from "../SetUp/SetUp.component";
import Footer from "./Footer.component";

test("renders text elements", () => {
  render(
    <SetUp>
      <Footer />
    </SetUp>
  );

  const text = screen.getByText(/Footer/i);
  expect(text).toBeInTheDocument();
});

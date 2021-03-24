import { screen, render } from "@testing-library/react";
import Main from "./Main.component";
import SetUp from "../../parts/SetUp/SetUp.component";

test("renders motto", () => {
  render(
    <SetUp>
      <Main />
    </SetUp>
  );
  const headline = screen.getByText(
    /Building is about getting around the obstacles that are presented to you\./i
  );
  expect(headline).toBeInTheDocument();
});

test("renders encouragement", () => {
  render(
    <SetUp>
      <Main />
    </SetUp>
  );
  const learnMore = screen.getByText(/Learn more/i);
  expect(learnMore).toBeInTheDocument();
});

test("renders image", () => {
  render(
    <SetUp>
      <Main />
    </SetUp>
  );
  const renovationImg = screen.getByAltText("renovation");
  expect(renovationImg).toBeInTheDocument();
});

// TODO: Add missing async test of loading feed

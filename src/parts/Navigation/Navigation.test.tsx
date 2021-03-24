import {
  screen,
  render,
} from "@testing-library/react";
import SetUp from "../../parts/SetUp/SetUp.component";
import Navgation from "./Navigation.component";

test("renders nav elements", () => {
  const { container } = render(
    <SetUp>
      <Navgation />
    </SetUp>
  );

  const logoFull = container.querySelector("#logo-full");
  expect(logoFull).toBeInTheDocument();

  const logo = container.querySelector("#logo");
  expect(logo).toBeInTheDocument();

  const blog = screen.getByText(/Blog/i);
  expect(blog).toBeInTheDocument();

  const services = screen.getByText(/Services/i);
  expect(services).toBeInTheDocument();

  const more = screen.getByText(/More/i);
  expect(more).toBeInTheDocument();

  const auth = screen.getByText(/Sign up/i);
  expect(auth).toBeInTheDocument();
});

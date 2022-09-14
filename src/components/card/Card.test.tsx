import { render, screen } from "@testing-library/react";
import Card from ".";

test("renders card component and its children", () => {
  render(
    <Card>
      <p>I am Card's children!</p>
    </Card>,
  );
  expect(screen.getByTestId("card-component")).toBeInTheDocument();
  expect(screen.getByText(/I am Card's children!/i)).toBeInTheDocument();
});

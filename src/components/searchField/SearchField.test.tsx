import { render, screen } from "@testing-library/react";
import SearchField from ".";

const onSuggestSelect = jest.fn();

test("renders SearchField component", () => {
  render(<SearchField placeholder="Placeholder" onSuggestSelect={onSuggestSelect} />);
  expect(screen.getByRole("combobox")).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Placeholder/i)).toBeInTheDocument();
  expect(screen.getByRole("listbox")).toBeInTheDocument();
});

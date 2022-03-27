import {
  render,
  screen,
  fireEvent,
  queryByPlaceholderText,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../components/counter";
import LevelCalculator from "../LevelCalculator";

test("counter + is clickable", async () => {
  const counter = { name: "Vigor", value: 10, minValue: 10 };
  const onIncrement = jest.fn();
  const { queryByText } = render(
    <Counter counter={counter} onIncrement={onIncrement} />
  );
  //   expect(await screen.getByRole("button", { name: "+" })).toBeEnabled();
  const button = queryByText("+");
  fireEvent.click(button);
  expect(onIncrement).toHaveBeenCalledTimes(1);
});

test("counter - is clickable", async () => {
  const counter = { name: "Vigor", value: 10, minValue: 10 };
  const onDecrement = jest.fn();
  const { queryByText } = render(
    <Counter counter={counter} onDecrement={onDecrement} />
  );
  //   expect(await screen.getByRole("button", { name: "+" })).toBeEnabled();
  const button = queryByText("-");
  fireEvent.click(button);
  expect(onDecrement).toHaveBeenCalledTimes(1);
});

test("counter text box can submit", async () => {
  const counter = { name: "Vigor", value: 10, minValue: 10 };
  const onSubmit = jest.fn();
  const { queryByPlaceholderText } = render(
    <Counter counter={counter} onSubmit={onSubmit} />
  );
  //   expect(await screen.getByRole("button", { name: "+" })).toBeEnabled();
  const button = queryByPlaceholderText("Enter stat");
  fireEvent.submit(button);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

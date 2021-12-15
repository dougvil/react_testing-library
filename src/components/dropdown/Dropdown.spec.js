import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "./Dropdown";

const title = "Escolha uma palavra mágica";
const options = ["Licença", "Por Favor", "Obrigado"];

describe("Dropdown Component", () => {
  it("should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  it("should open dropdown when button clicked", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    const buttonNode = screen.getByRole("button", { name: title });
    userEvent.click(buttonNode);

    expect(
      screen.getByRole("menuitem", { name: options[0] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[1] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[2] })
    ).toBeInTheDocument();
  });

  it("should close when option was selected and close dropdown", () => {
    const onSelect = jest.fn();
    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    userEvent.click(screen.getByRole("button", { name: title }));

    const option1 = screen.getByRole("menuitem", { name: options[1] });

    // ensure dropdown is open
    expect(
      screen.getByRole("menuitem", { name: options[0] })
    ).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[2] })
    ).toBeInTheDocument();

    userEvent.click(option1);

    // ensure
    expect(onSelect).toHaveBeenCalledWith(options[1]);

    // ensure dropdown was closed
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});

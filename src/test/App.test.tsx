import App from "../App";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { default as userEvent } from "@testing-library/user-event";

describe("App", () => {
  it("render working", () => {
    render(<App />);
    const element = screen.getByText("what skills i have");
    expect(element).toBeInTheDocument();
  });

  it("card hover", async () => {
    render(<App />);

    userEvent.hover(screen.getByText("Front Side"));
    await waitFor(() => {
      expect(screen.getByText("Back Side")).toBeInTheDocument();
    });
  });
  it("link working", async () => {
    render(<App />);
    const link = screen.getByText("github");
    userEvent.click(link);
    await waitFor(() => {
      expect(link).toHaveProperty("href", "https://github.com/Kaminopapa");
    });
  });
});

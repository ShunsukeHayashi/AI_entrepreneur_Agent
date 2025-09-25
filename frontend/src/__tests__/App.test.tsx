import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import App from "../App";
import { HEALTH_ENDPOINT } from "../api/health";

const mockFetch = vi.fn();

beforeEach(() => {
  mockFetch.mockReset();
  vi.stubGlobal("fetch", mockFetch);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("App", () => {
  it("displays backend health status when request succeeds", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ status: "ok", service: "backend", timestamp: "2024-01-01T00:00:00.000Z" }),
    });

    render(<App />);

    expect(screen.getByText(/Checking/i)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/ok/i)).toBeInTheDocument());

    expect(mockFetch).toHaveBeenCalledWith(HEALTH_ENDPOINT, expect.any(Object));
    const serviceLabel = screen.getByText(/Service/i, { selector: "span.card__label" });
    const serviceRow = serviceLabel.closest("li");
    expect(serviceRow).not.toBeNull();
    expect(within(serviceRow as HTMLElement).getByText(/backend/i)).toBeInTheDocument();
    expect(screen.getByText(/Reported at/i)).toBeInTheDocument();
  });

  it("shows an error message when backend cannot be reached", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network unreachable"));

    render(<App />);

    await waitFor(() => expect(screen.getByText(/Error/i)).toBeInTheDocument());
    expect(screen.getByRole("alert")).toHaveTextContent("Network unreachable");
  });
});

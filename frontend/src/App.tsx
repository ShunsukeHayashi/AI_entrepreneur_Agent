import { useCallback, useEffect, useMemo, useState } from "react";
import { type HealthResponse, HEALTH_ENDPOINT } from "./api/health";
import "./App.css";

type StatusState = "idle" | "loading" | "success" | "error";

const formatTimestamp = (value?: string) => {
  if (!value) return "Unknown";
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return date.toLocaleString();
  } catch {
    return value;
  }
};

function App(): JSX.Element {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [status, setStatus] = useState<StatusState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [clientTimestamp, setClientTimestamp] = useState<string | null>(null);

  const requestInfo = useMemo(
    () => ({
      endpoint: HEALTH_ENDPOINT,
    }),
    [],
  );

  const fetchHealth = useCallback(async () => {
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch(requestInfo.endpoint, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = (await response.json()) as HealthResponse;
      setHealth(data);
      setClientTimestamp(new Date().toISOString());
      setStatus("success");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
      setErrorMessage(message);
      setHealth(null);
      setClientTimestamp(null);
      setStatus("error");
    }
  }, [requestInfo.endpoint]);

  useEffect(() => {
    void fetchHealth();
  }, [fetchHealth]);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">AI Entrepreneur Agent Dashboard</h1>
        <p className="app__subtitle">Monitor the backend service readiness in real time.</p>
      </header>

      <main className="app__main">
        <section className="card" aria-live="polite">
          <div className="card__meta">
            <div>
              <span className="card__label">Health endpoint</span>
              <code className="card__value">{requestInfo.endpoint}</code>
            </div>
            <button
              type="button"
              className="card__refresh"
              onClick={() => void fetchHealth()}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          <div className="card__status">
            {status === "loading" && <span className="pill pill--loading">Checking...</span>}
            {status === "success" && <span className="pill pill--success">{health?.status ?? "unknown"}</span>}
            {status === "error" && <span className="pill pill--error">Error</span>}
          </div>

          {status === "success" && health && (
            <ul className="card__list">
              <li>
                <span className="card__label">Service</span>
                <span className="card__value">{health.service ?? "backend"}</span>
              </li>
              <li>
                <span className="card__label">Reported at</span>
                <span className="card__value">{formatTimestamp(health.timestamp)}</span>
              </li>
              <li>
                <span className="card__label">Fetched at</span>
                <span className="card__value">{formatTimestamp(clientTimestamp ?? undefined)}</span>
              </li>
            </ul>
          )}

          {status === "error" && errorMessage && (
            <div className="card__error" role="alert">
              <p>Failed to reach backend.</p>
              <code>{errorMessage}</code>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

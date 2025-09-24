export type HealthResponse = {
  status?: string;
  service?: string;
  timestamp?: string;
};

const DEFAULT_API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3001";
const sanitizedBaseUrl = DEFAULT_API_BASE_URL.replace(/\/$/, "");

export const HEALTH_ENDPOINT = `${sanitizedBaseUrl}/health`;

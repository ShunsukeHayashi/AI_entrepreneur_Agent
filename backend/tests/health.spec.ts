import request from "supertest";
import app from "../src/app";

describe("GET /health", () => {
  it("responds with service status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        status: "ok",
        service: "backend",
      }),
    );
  });
});

import request from "supertest";
import app from "../src/index.js";

describe("Health endpoint", () => {
  it("returns 200 and success message", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("success", true);
  });
});

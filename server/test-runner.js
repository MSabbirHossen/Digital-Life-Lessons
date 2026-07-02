import request from "supertest";
import app from "./src/index.js";

(async () => {
  try {
    const res = await request(app).get("/api/health");
    console.log("status", res.status);
    console.log("body", res.body);
    process.exit(res.status === 200 ? 0 : 2);
  } catch (err) {
    console.error("test-runner error", err);
    process.exit(3);
  }
})();

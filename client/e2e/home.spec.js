import { test, expect } from "@playwright/test";

test("home page loads and exposes public navigation", async ({ page }) => {
  await page.route("**/api/lessons/**", async (route) => {
    const url = route.request().url();

    if (url.includes("/featured")) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ lessons: [] }),
      });
      return;
    }

    if (url.includes("/top-saved")) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ lessons: [] }),
      });
      return;
    }

    if (url.includes("/top-contributors-week")) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ contributors: [] }),
      });
      return;
    }

    await route.fallback();
  });

  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Digital Life Lessons" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Explore Lessons" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Public Lessons" }),
  ).toBeVisible();
});

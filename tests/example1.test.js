// tests/example1.test.js
const { test, expect } = require('@playwright/test');

function waitFor(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

const currentTime = Date.now();

const url1 = "chrome://gpu/";
const url2 = "https://www.soft8soft.com/webglreport";
const url3 = "https://webglsamples.org/aquarium/aquarium.html";

test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 160000);
});

test.describe('Testing 123', () => {

    // Check if hardware acceleration is enabled. Without it, our tests will be much slower.
    test("1. GPU hardware acceleration", async ({ page }) => {
        await page.goto(url1);
        let featureStatusList = page.locator(".feature-status-list")

        await waitFor(2000);
        await page.screenshot({ path: 'screens/screenshot' + currentTime + '_1.png', fullPage: true });

        // await expect(featureStatusList).toContainText("Hardware accelerated")
    })

    test("2. webgl report", async ({ page }) => {
        await page.goto(url2)

        await waitFor(2000);
        await page.screenshot({ path: 'screens/screenshot' + currentTime + '_2.png', fullPage: true });
    })

    test("3. aquarium", async ({ page }) => {
        await page.goto(url3)

        await waitFor(5000);
        await page.screenshot({ path: 'screens/screenshot' + currentTime + '_3.png', fullPage: true });
    })
})
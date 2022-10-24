# Headless chrome – testing WebGL using playwright

We have webgl animations that requires GPU hardware acceleration to achieve good performance. Smooth WebGL animation should run at 60 frames per second. Our e2e tests will visit website with webgl animation, take screenshot and save it as .png file. We will try with different playwright settings and check the results.

Testing canvas elements and WebGL animations is difficult task. To achieve smooth animations and good performance in end-to-end testing - framework Playwright is good choice. With proper configuration we can run parallel tests using hardware acceleration. Achieving 60 frames per seconds in WebGL animation is possible even in Headless Chrome.

#### Demo scenario
Demo scenario is simple: visit three urls and take screenshots. First url: chrome://gpu/ to check if chrome having “Hardware accelerated” option enabled. Second url: https://www.soft8soft.com/webglreport to debug webgl browser settings and finally third url: https://webglsamples.org/aquarium/aquarium.html with animation. 

Expected results: GPU hardware acceleration enabled and smooth animation with 60 frames per second.

#### One time initialization
```
npm install
npx playwright install
```

#### To run test
```
npx playwright test example1 --reporter=list
Running 3 tests using 3 workers
ok 1 [chromium] › example1.test.js:38:5 › Testing 123 › 3. aquarium (12s)
ok 2 [chromium] › example1.test.js:31:5 › Testing 123 › 2. webgl report (5s)
ok 3 [chromium] › example1.test.js:21:5 › Testing 123 › 1. GPU hardware acceleration (8s)
3 passed (13s)
```

#### Doing screenshots
When writing Playwright tests you can decide to take full page screenshot at any time. Our script is executing : 
```
await page.screenshot({ path: 'screens/screenshot' + currentTime + '_1.png', fullPage: true });
```

Saved screenshots will be placed in /screens/ directory. Here are 3 screenshots saved after running headless Chrome with GPU support enabled (Hardware acceleration):

![](https://github.com/createit-dev/168-headless-chrome-get-60fps-in-windows/blob/master/images/playwright-headless-60-fps.jpg)


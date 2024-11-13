const puppeteer = require('puppeteer');


(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless:false,
  });
  const context = await browser.createBrowserContext();
//   const page1 = await context.newPage();
//   const page2 = await context.newPage();
  
//   await context.close();
})();
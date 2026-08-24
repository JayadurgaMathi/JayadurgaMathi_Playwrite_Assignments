import { chromium,firefox,test } from '@playwright/test';
test("Launching of broswer",async()=>{
     // Edge + RedBus code
const browser1 = await chromium.launch({headless:false,channel:"msedge"}); //here we are getting chromoium browser object from playwright llib
const context1 = await browser1.newContext(); // - context not going to change untill last execution and created
//isloated env with the help of browser ref.
const page1 = await context1.newPage(); //created a new blank page or loading the URL
await page1.goto("https://www.redbus.in/") // goto - loading the URL) //title of your script, await should have async function
console.log("RedBus Title:", await page1.title())
    console.log("RedBus URL:", page1.url())
    await page1.waitForTimeout(5000);
});
test("Launch Flipkart in Firefox", async () => {
    // Firefox + Flipkart code
const browser2 = await firefox.launch({headless:false}); //here we are getting chromoium browser object from playwright llib
const context2 = await browser2.newContext(); // - context not going to change untill last execution and created
//isloated env with the help of browser ref.
const page2 = await context2.newPage(); //created a new blank page or loading the URL
await page2.goto("https://www.flipkart.com/") // goto - loading the URL) //title of your script, await should have async function
console.log("Flipkart Title:", await page2.title())
    console.log("Flipkart URL:", page2.url())

    await page2.waitForTimeout(10000);
}
);



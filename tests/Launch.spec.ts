import {chromium,test} from "@playwright/test" //test is come from playwright lib and need to import it.
test("Launching of broswer",async()=>{
const browser = await chromium.launch({headless:false,channel:"chrome"}); //here we are getting chromoium browser object from playwright llib
const context = await browser.newContext(); // - context not going to change untill last execution and created
//isloated env with the help of browser ref.
const page = await context.newPage(); //created a new blank page or loading the URL
await page.goto("https://www.amazon.in/") // goto - loading the URL) //title of your script, await should have async function

}
)
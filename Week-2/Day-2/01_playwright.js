/*
1.perfect documentation
2.Autowait mechanism
3.Tracviewer - snapshot,network calls for the eachline of a playwright code
4.Device Emulation
5.Netwrok Interception
6.Geo Location
7.Codegen -- record and generate the script as per our action
8.UI mode - DEbugmode
9.UI&API togerther can be tested

W3c protocol - given request - www.amazon.in & will get response out of it and completed,so no connectivity
(stateless)- connection with client/server is not persistent,connection is distraughted,ex:ecomm,CRM salesforce

websocket protocol(conncetivity)-constant connet with server(stateful)Live updates - ex:chat applications 
- WA- if msg sent double tick, if they blue color tick -read by the person - connectivity is intactful


Elements -- to find locators(Htmls, CSS)
Console - error details/logs to report it to dev
cookies - storing the session information(username,pwd) in KB
cache - images,texts in MB
Playwright has complete controls of chromedev tools such as source, elements, console,netwrok, application

Flakiness - unreliability or inconsistency. - auto wait will reduce the flakiness

playwright all the test script - with .ts extension under tests folder

things we need to have a automate a web application
1.Browser - Chromium, firefox, webkit
Launch the browser and tab - clean browser- there will be a profile connected 
difference between - chrome and incognito window -it will be new profile,cache will not be in incognito,
history wont be there,no login reuqired,  In incognito it will not pick caches
2.context -a fresh isolated env like incognito mode for testing purpose
3.page -page1(tab), page2(tab)empty space where we load the URL*/


//chromium - browser
//arrow function - in async named aync function - we use await keyword to 
// see that particular line , js completed before proceeding with the next line

import {chromium,test} from "@playwright/test" //test is come from playwright lib and need to import it.
test("Launching of broswer",async()=>{
const browser = await chromium.launch({headless:true,channel:"msedge"}); //here we are getting chromoium browser object from playwright llib
const context = await browser.newContext(); // - context not going to change untill last execution and created
//isloated env with the help of browser ref.
const page = await context.newPage(); //created a new blank page or loading the URL
await page.goto("www.amazon.in/") // goto - loading the URL) //title of your script, await should have async function

}
)

1. workers : 1 // line number 25 in config file
2. headless:false // line number 35 in config file
3. projects : comment firefox and webkit // comment line number 45 to 53

/*java script fundamentals
1.JS is async pgm
step 1
step2 */

/*Promise 3 stages 
Pending - yet to start
Resolve - process has successfully completed
Reject - process has failed to implement
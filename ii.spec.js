//Import the subpage containing the locators and methods.
const iipage = require('../pageobjects/ii.page');

//Create a test suite
describe('Amazon search a product', async () => {
  //create test case
    it('Amazon search a product', async () => {
  
      await browser.url("https://www.amazon.co.uk/")
      console.log(await browser.getTitle())
      expect(browser).toHaveTitleContaining("Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more")
      //selecting cookie preference
      await (await iipage.$acceptCookie).click()
      await browser.pause(2000)
      await (await iipage.$signInButton).click()
      await (await iipage.$emailField).setValue("ekugwumsamuel7@gmail.com")
      await (await iipage.$continue).click()
      await (await iipage.$password).setValue("PA55word")
      await (await iipage.$submit).click()
      await (await iipage.$searchbar).setValue("iphone 13 pro max")
      //Using Key action to describe the behavior when the Enter key is pressed. 
      await browser.keys("Enter");
      await browser.pause(3000)
      //declaring the variable brand and importing its properties from the subpage(iipage)
      const brand = await iipage.$brands;
      //creating a loop to get the total number of the brand.
      for (let i = 0; i < brand.length; i++) {
        //creating an Array (text) to get exact element text name before clicking
        const text = await brand[i].getText();
        console.log(brand[i]);
        if (text === "Apple") {
          await brand[i].click();
          break;
        }
      }
      await browser.pause(3000);
    })
});



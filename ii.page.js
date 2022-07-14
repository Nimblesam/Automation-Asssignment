//one class can inherit/acquire the properties,Methods of the iipage page class
//sub page containing specific locators and methods.
class iipage {
    get $acceptCookie()
    {
      return $("#a-autoid-0");
    }
    get $signInButton() 
    {
        return $("#nav-link-accountList-nav-line-1");
    }
    //methods
    get $emailField() 
    {
        return $("#ap_email");
    }
    get $password() 
    {
        return $("#ap_password");
    }
    get $continue()
     {
        return $("#continue");
    }
    get $submit() 
    {
        return $("#signInSubmit");
    }
    get $searchbar() 
    {
        return $("#twotabsearchtextbox");
    }
    get $searchEnter() 
    {
        return $("nav-search-submit-button");
    }
    get $brands()
    {
        return $$("//span[contains(text(), 'Brand')]/../../ul/li//a/span");
    }
    get $type()
    {
        return $("//span[contains(text(),'Used')]");
    } 
    get $dropdown()
    {
        return $("//span[@class='a-dropdown-prompt']");
    }
    get $filter()
    {
        return $("#s-result-sort-select_2");
    }
    get $pick()
    {
        return $("//span[normalize-space()='Apple iPhone 13 Pro Max (1TB) - Silver']");
    }
    get $additem()
    {
        return $("#add-to-cart-button");
    }
    get $applecare()
    {
        return $("//div[@id='attach-warranty-display']//span[@id='attach-warranty-displayTitle']");
    }
   
}
//To export the sub page containing the locators
module.exports = new iipage();

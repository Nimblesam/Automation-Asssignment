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
}
//To export the sub page containing the locators
module.exports = new iipage();

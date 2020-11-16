        import {Selector} from 'testcafe' ;
        
        const developerName = "#developer-name";
        const osType = "#macos";
        const submitButton = "#submit-button";

        //TestCafe uses standard CSS selectors to locate elements
        //We defined constants for each element to be declared here and recalled when performing acitons
        //Can be written also as: const Selector osType = "#macos";

        fixture("First Fixture Selectors")
        .page("https://google.com");

        test.page("https://devexpress.github.io/testcafe/example/") ("First name", async t => {
        //test(name: string, fn: (t: TestController) => Promise<any>): TestFn
        //by using test.page, the page specified in the string given will be opened, but if not 
        //specified and only specified a string in fixture.page, the webpage specified in the string
        //will be opened and having the tests,and actions applied on it as typeText, click, etc..
            await t
            .typeText(developerName, "Amr")
            .click(osType)
            .click(submitButton); //.page("https://devexpress.github.io/testcafe/example/")
            
        //by installing powerShell Microsoft, running testcafe from terminal issue was resolved
        } );

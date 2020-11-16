        
        
        fixture("First Fixture")
        .page("https://devexpress.github.io/testcafe/example/");

        test("First name", async t => {
        //test(name: string, fn: (t: TestController) => Promise<any>): TestFn
            await t
            .typeText("#developer-name", "Amr")
            .click("#macos")
            .click("#submit-button");
            
        //by installing powerShell Microsoft, running testcafe from terminal issue was resolved
        } );

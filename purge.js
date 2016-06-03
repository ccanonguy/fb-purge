var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};


page.open("http://facebook.com", function(status) {
    if ( status === "success" ) {
        page.evaluate(function() {
            document.querySelector("input[name='email']").value = "<YOUR_EMAIL_HERE>";
            document.querySelector("input[name='pass']").value = "<YOUR_PASSWORD_HERE>";
            document.querySelector("#login_form").submit();

            console.log("Login submitted!");
        });
        window.setTimeout(function () {
        	page.open("https://www.facebook.com/settings?tab=security&section=sessions&view", function(status) {
        		setTimeout(function() {
        			page.evaluate(function() {
        				document.querySelector("a[data-testid=test_id_settings_reveal_link]").click();
        				setTimeout(5000);
        			});
        		}, 5000);
        	})	
        }, 5000);
   }
});


window.setTimeout(function() {
	phantom.exit();
}, 15000);
test('isEven()', function() {
    ok(isEven(0), 'Zero is an even number');
    ok(isEven(2), 'So is two');
    ok(isEven(-4), 'So is negative four');
    ok(!isEven(1), 'One is not an even number');
    ok(!isEven(-7), 'Neither is negative seven');
})

test('asynchronous test', function() {
    // Pause the test first
    stop();
     
    setTimeout(function() {
        ok(true);
 
        // After the assertion has been called,
        // continue the test
        start();
    }, 100)
})

asyncTest('asynchronous test2', function() {
    // The test is automatically paused
     
    setTimeout(function() {
        ok(true);
 
        // After the assertion has been called,
        // continue the test
        start();
    }, 100)
})

/*
// A custom function
function ajax(successCallback) {
    $.ajax({
        url: 'server.php',
        success: successCallback
    });
}
 
// Tell QUnit that you expect three assertion to run
test('asynchronous test', 3, function() {
    // Pause the test
    stop();
 
    ajax(function() {
        ok(true);
    })
 
    ajax(function() {
        ok(true);
        ok(true);
    })
 
    setTimeout(function() {
        start();
    }, 2000);
})
*/


/*
    var Money = function(options) {
        this.amount = options.amount || 0;
        this.template = options.template || "{symbol}{amount}";
        this.symbol = options.symbol || "$";
    };
    Money.prototype = {
        add: function(toAdd) {
            this.amount += toAdd;
        },
        toString: function() {
            return this.template
                .replace("{symbol}", this.symbol)
                .replace("{amount}", this.amount)
        }
    };
    Money.euro = function(amount) {
        return new Money({
            amount: amount,
            template: "{amount} {symbol}",
            symbol: "EUR"
        });
    };
	
	    module("Money", {
        setup: function() {
            this.dollar = new Money({
                amount: 15.5
            });
            this.euro = Money.euro(14.5);
        },
        teardown: function() {
            // could use this.dollar and this.euro for cleanup
        }
    });
     
    test("add", function() {
        equal( this.dollar.amount, 15.5 );
        this.dollar.add(16.1)
        equal( this.dollar.amount, 31.6 );
    });
    test("toString", function() {
        equal( this.dollar.toString(), "$15.5" );
        equal( this.euro.toString(), "14.5 EUR" );
    });

*/
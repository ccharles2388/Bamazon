// Required Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
var colors = require('colors');
var Table = require('cli-table');
const cTable = require('console.table');


// Connection script
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Username
    user: "root",

    // Credentials
    password: "random04",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(colors.cyan("Welcome! ...you are now connected to the Bamazon Store database as id ( Please Ctl-C To Exit )" + connection.threadId));
    //connection.end();

    bamazon();      //Call main function

});                 // End Connection Script

// BEGIN Display Inventory
function bamazon() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        // Cli-Table display code with Color
        var table = new Table(
            {
                head: ["Item ID".cyan.bold, "Product Name".cyan.bold, "Department Name".cyan.bold, "Price".cyan.bold, "Quantity".cyan.bold],
                colWidths: [12, 75, 20, 12, 12],
            });

        // Set/Style table headings and Loop through entire inventory
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, parseFloat(res[i].price).toFixed(2), res[i].stock_quantity]
            );
        }

        // console.log(table.toString());
        console.log(table);
        console.log(Table);
        // END Display Inventory

        // Prompt Customers For Input
        inquirer.prompt([
            {
                type: "number",
                message: "Please enter the Item ID of the item that you would like to buy? ( Please Ctl-C To Exit )".yellow,
                name: "item_id"
            },
            {
                type: "number",
                message: "How many would you like to buy? ( Please Ctl-C To Exit )".yellow,
                name: "quantity"
            },
        ])

            // Ordering function
            .then(function (cart) {

                var quantity = cart.quantity;
                var itemID = cart.item_id;

                connection.query('SELECT * FROM products WHERE item_id=' + itemID, function (err, selectedItem) {
                    if (err) throw err;

                    // Verify item quantity desired is in inventory
                    if (selectedItem[0].stock_quantity - quantity >= 0) {

                        console.log("INVENTORY AUDIT: Quantity in Stock: ".green + selectedItem[0].stock_quantity + " Order Quantity: ".green + quantity.yellow);

                        console.log("Congratulations! Bamazon has suffiecient inventory of ".green + selectedItem[0].product_name.yellow + " to fill your order!".green);

                       

                        // Calculate total sale, and fix 2 decimal places
                        console.log("Thank You for your purchase. Your order total will be ".green + (cart.quantity * selectedItem[0].price).toFixed(2).yellow + " dollars.".green, "\nThank you for shopping at Bamazon!".magenta);

                        // Query to remove the purchased item from inventory.                       
                        connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [selectedItem[0].stock_quantity - quantity, itemID],

                            function (err, inventory) {
                                if (err) throw err;

                                bamazon();  // Runs the inquirer prompt again, so the customer can continue shopping.
                            });  // Ends the code to remove item from inventory.

                    }
                    // Low inventory warning
                    else {
                        console.log("INSUFFICIENT INVENTORY ALERT: \nBamazon only has ".red + selectedItem[0].stock_quantity + " " + selectedItem[0].product_name.cyan + " in stock at this moment. \nPlease make another selection or reduce your quantity.".red, "\nThank you for shopping at Bamazon!".magenta);

                        bamazon();  // Runs the prompt again, so the customer can continue shopping.
                    }
                });
            });
    });
}   // Closes bamazon function
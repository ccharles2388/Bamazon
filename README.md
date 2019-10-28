# Bamazon
### Bamazon Node Backend Store Simulation

>An Amazon-like CLI storefront built with mySQL, NODE.js and Inquirer NPM. Output styled with Colors and console.table NPM's. The app can take in orders from customers, calculate sales price and deplete stock from the store's inventory. It has an automated inventory audit and alert system that will not allow the customer to order more than quantity availiable in stock.

### Deployment

1. Clone repo
2. Run `npm install`
3. Build database from `schema.sql`
4. At command prompt run `node bamazonCustomer.js`

### Data Source Overview:
1.  BAMAZON Main Folder Contains All Source Code
2.  bamazonCustomer.js - node application 
3.  schema.sql - database connection and configuration file
4.  README.md - application instructions and detail file
5.  package.json - local environment dependencies and application requirements
6.  package-lock.json - global environment dependencies and application requirements
7.  img folder - contains all images used for application including screen shot instructions
8.  .gitignore - ignores node modules and other non dependent files from storing in         
    repository 


### BAMAZON Application Screenshots 

1. Customer Runs node bamazonCustomer.js App
![GitHub Logo](/img/bazmazon_1.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_1.png)
<br>

2. Customer Is Displayed Current Products And Inventory Availiable
![GitHub Logo](/img/bazmazon_2.png)


Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_2.png)
<br>

3. Customer Gets To Choose Product Selection By Entering Item ID ( Example 2 Then Presses Enter)
![GitHub Logo](/img/bazmazon_3.png)


Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_2.png)
<br>

4. Customer Is Then Displayed Another Prompt " How Many Would You Like To Buy " ( Example 1 )
![GitHub Logo](/img/bazmazon_4.png)


Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_4.png)
<br>

5. Inventory Audit Runs And Displays To Customer If Item Can Be Purchased And If So Processes The Order
![GitHub Logo](/img/bazmazon_5.png)


Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_5.png)
<br>

6. Customer Is Then Displayed An Updated Item Screen Of Availiable Inventory
![GitHub Logo](/img/bazmazon_6.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_6.png)
<br>

7. Checking For OverOrdering Alert ( If Customer Trys To Order More Than Inventory )The App Is Redisplayed
![GitHub Logo](/img/bazmazon_7.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_7.png)
<br>

8. Customer Selects Item And Now Enters An Order Of 300 Which Exceeds Inventory On Hand
![GitHub Logo](/img/bazmazon_8.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_8.png)
<br>

9. Customer Is NOw Displayed An Insufficient Inventory Alert And Displays Actual Quantity Availiable, With A New Choice Of Making Another Selection Or Reducing The Order Quantity
![GitHub Logo](/img/bazmazon_9.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_9.png)
<br>

10. Customer Can Finally Exit Program By Selecting Ctl-C Which Is Availiable Throughout Program 
![GitHub Logo](/img/bazmazon_10.png)

Format: ![Direct Image Link]https://github.com/ccharles2388/Bamazon/blob/master/img/bazmazon_10.png)

### Technologies Utilized

* mySQL
* NodeJS
* JavaScript
* NPM Inquirer
* NPM Colors
* NPM console.table

---

### Author

* Curtis Charles
Basically, what we (Group 14) created was an Express.js calculator API that takes two numbers and an operator (add, subtract, multiply and divide) as
query parameters and respond with a JSON object containing the result.
We first installed the express package, created an instance of express and port 3000 where the server listens for requests.
Since, we don't have JSON in node.js we use a middleware(app.use)in express to parse json in the program.
Next we created a get request at  route /calculate to enable the user to perform basic calculations on the server when he provdes two numbers and an operation (e.g, /calculate?num1=58num2=38operation=add) 
The query parameters (num1 and num2) are in strings so we converted it to numbers.  The next line checks if the parameters are missing or invalid if it is, it returns a bad request response(404).
Then it performs all the operation using the if conditions, if an invalid operator, let's say square for example is entered, it will display "invalid operator" on the webpage.
The res.send({result:result}) sends the result back as a JSON response.
If you run the code and click on the URL, the server allows you to enter two numbers and an operation.

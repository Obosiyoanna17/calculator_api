// import the express package
const express = require('express');

//  An instance of the express package
const app = express();
// Port for the server to listen on
const port = 3000;

// middleware to parse JSON parse
 app.use(express.json());
    // Endpoint for the route so as to perform basic calculations
app.get('/calculate', (req, res) => {
    // These are the query parameters       
        let {num1, num2, operation } = req.query;
        // converts num1 and num2  from strings to numbers
        num1 = Number(num1)
        num2 = Number(num2)
        //  It checks if the parameters are missing or invalid, if it is, it returns a bad request response(404)
        if (!num1 || !num2 || !operation) {
            return  res.status(400).json ({error: 'Please provide two valid numbers as num1 and num2 and an operation.' });
        }
        let result;
        // Perform basic operations using if or switch cases
        
        // Let use the if conditions to perform basic operations 👇
    
        if (operation  === 'add') {
            result = num1 + num2;
        } else if (operation === 'substract') {
            result = num1 - num2;
        } else if (operation === 'multiply') { 
            result = num1 * num2;
        } else if (operation === 'divide') {
            // Respond with the result
            result = num1 / num2;
            // If i enter an invalid operator  let's say square, it displays "invalid operator"
        } else {
            result = "Invalid Operator"
        }
    // Sends result back as JSON response after responding with a JSON object
        res.send({ "result": result })
    })
    
    // Start the server
    app.listen(3000,() => {
        console.log('Server running at http://localhost:3000');
    });
    // When you click on the URL. The server allows you to enter two numbers and perform an operatiom.
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    










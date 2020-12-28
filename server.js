const express = require('express'); // brings in the package
const connectDB = require('./config/db');   //brings in database connection code

const app = express();  //initialize app variable

connectDB();    // Connect Database

//Middleware
app.use(express.json({ extended:false }));    // parse json objects in requests - this is the middleware formerly known as body-parser

//Routing
app.get('/', (req, res) => res.send('API Running')); // When the server receives a GET request from a url ending with /, send a response with data content 'API Running'

app.use('/api/messages', require('./routes/api/messages')); //define routes

const PORT = process.env.PORT || 5000;  //The port is looking for an environmental variable.  On this project it will come from Heroku, the SaaS where the server is deployed.  If no environmental varibale is present (local production), it uses local port 5000 instead.

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));  // server app should listen for a port; upon connection, logs the port referenced.


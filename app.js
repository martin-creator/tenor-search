/**
 *Require Libraries
*/

const express = require('express');

// App Setup

const app = express ();

//Middleware

const {engine}  = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views","./views");

//Routes

app.get('/', (req,res) => {
        console.log(req.query)
	res.render('home')

});

app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name });
})


//Start Server

app.listen(3000, () => {
	console.log('Gif Search is listening on port localhost :3000!');
});

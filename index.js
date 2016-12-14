// index.js Main

// require('./app/index')



/*
	var content
	try {
		content = fs.readFileSync('file.md','utf-8');
	}catch(ex){
		console.log(ex);
	}
*/
/*
	console.log("Start reading a file... ")

	fs.readFile('file.md', 'utf-8', function(err, content){
		if(err){
			console.log("Error during reading a file");
			return console.log(err);
		}

		console.log(content)
	})

	console.log("End of file.")
*/

/*----------CREO EL WEBSERVER USANDO HTTP----------*//*
var fs = require('fs');
var http = require('http');
var port = 3000;

var requestHandler = (request, response) => {
	console.log(request.url);
	response.end('Hello Node.js Server!');
}

var server = http.createServer(requestHandler);

server.listen(port, (err) => {

	if(err){
		return console.log("something bad happened", err);
	}

	console.log("Server is listening on ", port);

})
*/


/*----------CREO EL WEBSERVER USANDO Express.js----------*/
var path = require('path');
var express = require('express');
var logger = require('morgan');
var port = 3000;

var app = express();

/*
	app.use((request, response, next) => {
		console.log(request.headers);
		next();
	})

	app.use((request, response, next) => {
		request.chance = Math.random();
		next();
	})

	app.get('/', (request,response) => {
		// console.log(request.url);
		// response.send("Hello from Express.js!");
		response.json({
			chance: request.chance
		})
	});

	app.listen(port, (err)=>{
		if(err){
			return console.log("Something bad happened", err)
		}

		console.log("Server is listening on port", port);
	})



	app.engine('.hbs', expresshbs({
		defaultLayout: 'main',
		extname: '.hbs',
		layoutsDir: path.join(__dirname, 'views/layouts')
	}))
	app.set('view engine', '.hbs');
	app.set('views', path.join(__dirname, 'views'))


	app.get('/', (request, response) => {
		response.render('home', {
			name: 'John'
		})
})*/

//Log the requests
app.use(logger('dev'));

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Route for everything else
app.get('*', function(request, response){
	response.send('Hello World!');
})

//Fire it up!
app.listen(port);
console.log('Listening on port ', port);
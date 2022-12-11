const fs = require('fs/promises');
const fs1 = require('fs');
const http = require('http');
const myFileWriter = async (fileName, fileContent) => {
	try {
		await fs.writeFile(fileName, fileContent)
	}
	catch (error){
		console.log(error);
	}
}
myFileWriter("index.html", "<h1> Hello World </h1><p> This is {Your Name}... </p>");

fs1.readFile('index.html',{encoding: "utf-8"}, (err, data) => {
	console.log("file read");
	
	if(data){
		const server = http.createServer( (req, res) => {
			console.log("server up")
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});
		console.log("-----------------------");
		server.listen(5000, ()=>console.log("server at 5000"));
	}
	else console.log(err);

});

///=======================

/*

SOS
input = SSSSSSS
		SOSSOSSOS
		array.fill() = [S,0,S,S,0,S]
				[S,S,S,S,S,S]
count = 2
count = 0;




*/
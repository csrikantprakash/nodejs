const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
		await fs.writeFile(fileName, fileContent)
	}
	catch (error){
		console.log(error);
	}

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile(fileName, {encoding: "utf-8"});
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName, (err) => {
		   console.log(err);
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
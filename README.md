
// Assuming you have npm installed and bower installed globally

Init Project:
	Bower:
		1- Navigate to your project

		2- bower init (this will generate the bower.json file in your directory)

		3- To set the path where dependencies will be installed:
		   Manually create a .bowerrc file next to the bower.json file and add the following to it:
		   { "directory" : "public/components" }

		4- // Example to add bootstrap to dependencies
		   bower install bootstrap --save  

	Node:
	    1- npm init (this will generate the package.json file in your directory)

	    2- npm install --save bootstrap   

	       // Save in Dependencies
	       or  npm i -S bootstrap 

	       // Save in devDependencies
	       or npm i -D bootstrap  

	    Note: To create a project nodejs with expressjs:
	          npm install -g express-generator

	          // This will create a project with ejs template engine
	          express -e project-name  


Use Project already exists:

	1- bower install 

	2- npm install 

	3- node app.js    
	   http://localhost:3000 


To avoid running the node app.js command each change module that restarts the server each update:
	npm i -S nodemon

	Update scripte in package.json:
	"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1",
			"start": "nodemon app.js"
		  }

    npm run start
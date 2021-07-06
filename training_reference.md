ES6+ Features - 
- let / const 
- Destructuring
- Arrow functions
- Template String
- Spread / Rest Operators
- Promises 


Client Side
-----------
DOM - Document Object Model - HTML Elements
- represents the hierarchical structure of Webpage

Virtual DOM - React / Stencil - JavaScript Code
	- in-memory JavaScript representation of Actual DOM
	- Faster DOM Rendering

Shadom DOM - Angular - HTML5 API
	- Part of Actual DOM
	- Data hiding and encapsulation



    Versioning : X.Y.Z  
    Patch Version Change - 1.0.0 -> 1.0.1
    Minor version Change - 1.0.0 -> 1.2.0
    Major Version Change - 1.0.0 -> 2.0.0
    X = Major Version   (New features which are NOT backward compatible)
    Y = Minor Version   (New features which are backward compatible)
    Z = Patch Version   (bug fixes / add patches)

    ^ -> Minor version ^1.1.0 -> 1.2.9
    ~ -> Patch Version ~1.2.0 -> 1.2.9

    {
        demo-packages : [2.2.3],
        version : [
            0.2.0
            0.4.0
            1.0.0
            1.1.0
            1.1.6
            1.2.0
            1.2.2
            1.2.9
            2.0.0
            2.1.3
            2.2.3
        ]
    }

# Signup before running following commands -
    > npm adduser
     - username 
     - password
     - email

    > npm publish


1. specific package

> npm install chalk@1.2.3 --save-dev || -D || -g
    - Save the packages in JSON file (--save) - dependencies in Package.JSON file
    - Save the package in JSON file (--save-dev || -D )
        -> development dependencies
    - Save the package in Global Environment (-g)

2. saving the package in json file


# Configure ES6 Modules with Node - Install below packages
> @babel/core @babel/cli @babel/preset-env @babel/node
> babel.config.json


# Download / clone project -
> npm install : installs all the packages mentioned in package json file


# Notes-App
- node index.js add --title="" --body=""
- node index.js read --title=""
- node index.js remove --title=""
- node index.js list

# Convert NotesApp into Async JavaScript Code - Work for Weekend
- Promises
- Callbacks
- Async... await


# Typescript support
- types/node
- typescript



# Todo Routes

GET /todos      - get all todos items
POST /todos     - create new item in the todoCollection 
GET /todos/{id} - get single todo item based upon the id
DELETE /todos/{id}  - remove the item from the collection    
PATCH /todos/{id} & req.body  - update the todo Item


# Mongo URL : "mongodb+srv://sumitk:krsna123@cluster0.e9xsq.mongodb.net"

# Model - ODM
-> User - name, email, age
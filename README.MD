# TODO CRUD DOCUMENTATION (TodoApp v1)


## Important
Below this line is an old TodoAppv1 Documentation. This docs has been updated to v2. To open this app simply go to 
a. Client: https://pawtodoapp.netlify.app/
b. Server: https://pawtodoserver.herokuapp.com/

## 1. App Description
This is a basic CRUD (Create, Read, Update, Delete) with Node.js for server-side processing, Express.js for routing HTTP request, and MongoDB for database.

## 2. Requirements
1. Install MongoDB and MongoDB Compass on your local machine
3. Install Postman on your local machine
2. Install dependencies with `npm install`

## 3. How to Use
1. Create folder in C:/ and name it with `data`
2. Create folder in C:/data and name it with `db`
3. Start MongoDB server with `mongos` running in background
4. Open MongoDB Compass and connect to localhost database `http://127.0.0.1:27017`
5. Create new collection and name it `todoDB`
6. Move to directory `./todo_crud/TodoApp/`
7. Run `node server.js`
8. Test the API with HTTP Request on Postman app
9. On the body section you can fill required data with JSON format

## 4. Table of Request Header

| Request Header                     | Description                             |
| -----------------------------------|-----------------------------------------|
| router.post('/', todo.create)      | create a new todo                       |
| router.get('/',  todo.findAll)     | get all todo in the database            |
| router.get('/:id', todo.findOne)   | get specific todo with specified id     |
| router.put('/:id', todo.update)    | update specific todo with specified id  |
| router.delete('/:id', todo.delete) | delete specific todo with specified id  |
| router.patch('/:id', todo.patch)   | update one field of todo with specified id |

## 5. Team Member
1. Muhammad Firas Zahid Suryaatmaja (19/439816/TK/48546)
2. Wahyu Cahyo W (19/444077/TK/49273)
3. Vincent Colin (19/44076/48272)
4. Marthasya Mumtahanah Mustaqimah (19/444059/TK/49255)


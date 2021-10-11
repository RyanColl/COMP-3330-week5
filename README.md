# COMP-3330-week5
## Express | Mongoose

Last week we didn't have any homework sessions, but we did cover NodeJS as a backend language, alongside express. This week, we take this knowledge further and build a backend RESTful API. This involves following a set of rules prescribed by each method. The methods are: PUT, PATCH, POST, GET, and DELETE. I am going to take this a step further and create a react app using redux. I will display the data from the database, and allow us to directly delete from the database each user. We could add edit and add buttons, but we don't need to.

## HTTP Methods

When trying to reach the server, use Postman and enter http://localhost:3000/api/users into the bar. Use the GET, POST methods to call on the api url. Use GET, PUT, PATCH, and DELETE on the url with the id added to it. For example, after using Postman to send a GET request to the url, copy the ID and place it at the end of the url, like this: http://localhost:3000/api/users/placetheidhere , then use GET, PUT, PATCH or DELETE.

#### DELETE 
Delete is for deleting a resource. When we send a delete request to the express server, the server respondes by taking the id as a parameter, and deleting the user entry with the same id.

#### PATCH
Patch is similar to PUT in the sense that you are modifying existing data. Patch, however, takes in both an id and a new piece of data. It finds the user with the same id, and replaces the piece of data inside it with the new piece.

#### PUT
Put is similar to PATCH, but instead of going into an entry and mutating a piece of data, PUT replaces the entire object, keeping the same id.

#### POST
Post is used for adding new pieces of data to the database. You cannot actually POST on http://localhost:3000/api/users/placetheidhere because it doesnt make sense. You want to create new pieces of data with POST, therefore sending it to the http://localhost:3000/api/users url makes sense. Follow this with a GET request to see the new entry.

#### GET 
GET is similar to its word; it gets a requested resource. The server returns the list of users with a get request. The server will also give you the user if you use a GET request on this url: http://localhost:3000/api/users/placetheidhere .

## Command Scripts
1. "build": "react-scripts build",
2. "launch": "npm run build && node Server.js"

The build script is important when blending react and express. The build script builds my react app into the build folder for my express app to host. The launch script builds the app and then launches the server. It is essential that when working like this you rebuild your react app every time you host, or your changes will not show up.

## Mongoose

MongoDB and Mongoose go hand in hand to create models for your database entries. This gives you fast and easy queries while preserving safety in the form of data manipulation. When we create these models we must imagine the shape of our documents and model them out. For example, each user has a first_name, a last_name, a profession, and a hasDegree variable which is boolean, indicating whether the user has a degree or not. We use the following code to model a user:

#### userModel.js
<pre><code>const mongoose = require("mongoose");
const {Schema} = mongoose;
const userModel = new Schema({
  first_name: {type: String},
  last_name: {type: String},
  profession: {type: String},
  hasDegree: {type: Boolean, default: false},
});
module.exports = mongoose.model("User", userModel);
</code></pre>

## How it Works
It works by first accessing a database that has predefined users, and hosting a server that has numerous methods for accepting requests. I use two routes, one for the /api/books, and one for the /api/books/placetheidhere. The api/books route has two methods, GET, for getting a list of all the users, and POST, for sending data as a new database entry. The api/books/placetheidhere Has four methods: GET, PUT, PATCH, DELETE. The GET gets the information about that specific user, the PUT takes in new user data and replaces that specific user with it, the PATCH takes in a piece of information and replaces the specific user data that matches the input data. The DELETE method seems obvious... it deletes the object whos id it matches.

I have created a frontend. As you know the react app will be hosted naturally through the build folder as express runs itself as a server. Express will still respond with json through the browser or as json through postman when requests are sent to its url. The added react app uses fetch to access the api in the express app, this gives me the array of users from mongo, which is then added to redux and attached to the state variable. These users are printed out to the page, with an extended delete functionality. This will permanently delete that user by using fetch to access the delete request for that specific ID. To add more users, use Postman.

## ES6

Default from line 4 of reducer.js:
<pre><code>export default function reducer(state = [], action)</code></pre>

Const and Let from lines 25-32 of App.js:
<pre><code>const deleteUser = (id) => {
      fetch(`/api/users/${id}`, {
        method: 'DELETE'
      })
      let newUsers = users.filter(user => user._id !== id)
      store.dispatch(actions.getUsers(newUsers))
  }</code></pre>

Template Literal String from line 44 of App.js:
<pre><code>Has a Degree: {`${user.hasDegree}`}</code></pre>

Destructuring from line 7 of App.js:
<pre><code>const [users, setUsers] = React.useState([])</code></pre>

Arrow function from lines 17-19 of App.js: 
<pre><code>React.useEffect(() => {
    fetchUsers()
  }, [])</code></pre>

Spread syntax from line 8 of reducer.js:
<pre><code>...action.payload.users</code></pre>

Modules from lines 1-4 of App.js:
<pre><code>import React from 'react'
import './App.css';
import store from "./Redux/customizedStore";
import * as actions from "./Redux/actions";</code></pre>

Promises from lines 10-15 of App.js:
<pre><code>fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        store.dispatch(actions.getUsers(data))
      })
      .catch(err => setErrMsg(err))</code></pre>


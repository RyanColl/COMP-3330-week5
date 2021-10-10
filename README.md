# COMP-3330-week5
## Express | Mongoose

Last week we didn't have any homework sessions, but we did cover NodeJS as a backend language, alongside express. This week, we take this knowledge further and build a backend RESTful API. This involves following a set of rules prescribed by each method. The methods are: PUT, PATCH, POST, GET, and DELETE.

## HTTP Methods

When trying to reach the server, use Postman and enter http://localhost:3000/api/users into the bar. Use the GET, POST methods to call on the api url. Use GET, PUT, PATCH, and DELETE on the url with the id added to it. For example, after using Postman to send a GET request to the url, copy the ID and place it at the end of the url, like this: http://localhost:3000/api/users/placetheidhere , then use GET, PUT, PATCH or DELETE.

#### DELETE 
Delete is for deleting a resource. When we send a delete request to the express server, the server respondes by taking the id as a parameter, and deleting the user entry with the same id.

#### PATCH
Patch is similar to PUT in the sense that you are modifying existing data. Patch, however, takes in both an id and a new piece of data. It finds the user with the same id, and replaces the piece of data inside it with the new piece.

#### PUT
Put is similar to PATCH, but instead of going into an entry and mutating a piece of data, PUT replaces the entire object, keeping the same id.

#### POST
Post is used for adding new pieces of data to the database. You cannot actually POST on http://localhost:3000/api/users/placetheidhere because it doesnt make sense. You want to create new pieces of data with POST, therefore sending it to the http://localhost:3000/api/users url makes sense. Follow this with a get request to see the new entry.

#### GET 
GET is similar to its word; it gets a requested resource. The server returns the list of users with a get request. The server will also give you the user if you use a GET request on this url: http://localhost:3000/api/users/placetheidhere .

### Command Scripts
1. "start": "node Server.js"
2. "rebuild": "npm i && npm start"

The "start" script is what i use to run my server. It simply executes node on "Server.js". The "rebuild" script is perfect for individuals without the node modules folder in their project. Just type "npm run rebuild", and all the dependencies will be downloaded, and the server started.

### Mongoose

MongoDB and Mongoose go hand in hand to create models for your database entries. This gives you fast and easy queries while preserving safety in the form of data manipulation. When we create these models we must imagine the shape of our documents and model them out. For example, each user has a first_name, a last_name, a profession, and a hasDegree variable which is boolean, indicating whether the user has a degree or not. We use the following code to model a user

#### userModel.js
<pre><code><const mongoose = require("mongoose");
const {Schema} = mongoose;
const userModel = new Schema({
  first_name: {type: String},
  last_name: {type: String},
  profession: {type: String},
  hasDegree: {type: Boolean, default: false},
});
module.exports = mongoose.model("User", userModel);>
</code></pre>
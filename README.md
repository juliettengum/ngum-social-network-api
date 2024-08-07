Social Network API
Description
The Social Network API is a backend application that allows users to interact with a social network platform. Users can share their thoughts, react to friends' thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
## Installation
## Usage
## API Endpoints
## Users
## Thoughts
## Reactions
## Walkthrough Video
## License

## Installation
To get started with the project, follow these steps:

# Clone the repository:


* git clone https://github.com/your-username/social-network-api.git
* cd social-network-api
* Install dependencies: 


* npm install

* Set up the environment variables:
Create a .env file in the root directory and add your MongoDB connection string:
* MONGODB_URI=mongodb://localhost:27017/SocialDB
* Start the server:
* node server.js

## Usage
Use a tool like Insomnia or Postman to test the API endpoints.

## API Endpoints
# Users
* Create a new user:
Method: POST
URL: /api/users
* Body:
json
{
 "username": "testUser",
  "email": "test@example.com"
}

* Get all users:

Method: GET
URL: /api/users

* Get a single user by ID:

Method: GET
URL: /api/users/:id

* Update a user by ID:

Method: PUT
URL: /api/users/:id
Body:
json
{
  "username": "updatedUser",
  "email": "updated@example.com"
}

* Delete a user by ID:

Method: DELETE
URL: /api/users/:id

* Add a friend to a user's friend list:

Method: POST
URL: /api/users/:userId/friends/:friendId

* Remove a friend from a user's friend list:

Method: DELETE
URL: /api/users/:userId/friends/:friendId

# Thoughts
* Create a new thought:

Method: POST
URL: /api/thoughts
Body:
json
{
  "thoughtText": "This is a new thought",
  "username": "testUser",
  "userId": "user-id"
}

* Get all thoughts:

Method: GET
URL: /api/thoughts
Get a single thought by ID:

Method: GET
URL: /api/thoughts/:id

* Update a thought by ID:

Method: PUT
URL: /api/thoughts/:id
Body:
json
{
  "thoughtText": "Updated thought text"
}
* Delete a thought by ID:

Method: DELETE
URL: /api/thoughts/:id
Reactions
Create a reaction to a thought:

Method: POST
URL: /api/thoughts/:thoughtId/reactions
Body:
json
Copy code
{
  "reactionBody": "This is a reaction",
  "username": "testUser"
}

* Remove a reaction from a thought:

Method: DELETE
URL: /api/thoughts/:thoughtId/reactions/:reactionId

## Walkthrough Video

For a detailed walkthrough of the application and its features, check out the video here.
[walkthroughvideo](https://drive.google.com/file/d/1YyFvTeudQ9bxvMrMPbN676mqCwgrlUKt/view?usp=drive_link)

## License
This project is licensed under the MIT License.

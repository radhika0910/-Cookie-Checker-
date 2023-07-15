# Dynamic Cookie Server

This is a Node.js server that provides an API for managing dynamic cookies using Express.js and MongoDB.

## Installation

1. Clone the repository:

   `git clone https://github.com/your-username/your-repo.git`

   
2. Install the dependencies:

   `npm install`


3. Start the server:

   `npm start`
   
The server will start running on http://localhost:3000.

## Usage

### Check Cookie

Endpoint: GET /check-cookie

This endpoint checks if a dynamic cookie exists in the database. If the cookie is present, it returns a JSON response with `cookiePresent: true`. If the cookie is not found, it creates a new dynamic cookie, saves it to the database, and returns a JSON response with `cookiePresent: false` and `createdCookie: true`.

### Delete Cookie

Endpoint: GET /delete-cookie

This endpoint deletes the dynamic cookie from the database. It returns a JSON response with `cookieDeleted: true` if the deletion is successful.

## Hosted API

The server has been hosted on Render at https://nee-833q.onrender.com.

To use the hosted API, you can make HTTP requests to the following endpoints:

- Check Cookie: GET https://nee-833q.onrender.com/check-cookie
- Delete Cookie: GET https://nee-833q.onrender.com/delete-cookie

Make sure to include the necessary query parameters or headers as required by your application.

## Dependencies

- Express.js: Fast, unopinionated web framework for Node.js.
- express-session: Simple session middleware for Express.js.
- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.

## Database

The server connects to a MongoDB database hosted at mongodb+srv://demo:******@3dviewer.fs33ycy.mongodb.net/.

You can use your own database.


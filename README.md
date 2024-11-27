# Tinpet Backend - Documentation

This README is for documenting the API routes for the Tinpet project and explaining how the API works.  

The backend uses Express.js for the backend and Mongoose for connecting to MongoDB.  

Passport is used for authentication, with JOI as the input sanitization.  

## Routes:

### Account routes:
On successful attempt it returns a token. On failure it returns an error. 

POST ('api/v1/register') -> Sends a registration request to the backend.

POST ('api/v1/login') -> Sends a login request to the backend.

### Data routes:
Returns a JSON array of object on success, error on failure.

GET ('api/v1/pets') -> Return all pets (Maximum amount needs to be specified) 
GET ('api/v1/user:id') -> Return user profile based on ID. 

To be appended further...


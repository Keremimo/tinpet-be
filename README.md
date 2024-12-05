# Tinpet Backend - Documentation

This README is for documenting the API routes for the Tinpet project and explaining how the API works.  

The backend uses Express.js for the backend and Mongoose for connecting to MongoDB.  

Passport is used for authentication, with JOI as the input sanitization.  

## Routes:

### Account routes:
On successful attempt it returns a token. On failure it returns an error. 

POST ('api/v1/register') -> Sends a registration request to the backend.
Here's a fetch request example (Must be in an async function)
```jsx
try{
const response = await fetch('/api/v1/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: username, email: email, password: password})
}) //INFO: This will return a JSON on both success and failure
    const result = await response.json()
    if(response.ok){
        //INFO: external useState function
    setSuccessMessage(result.message || "Registration successful!") 
    //TODO: Grab the JSON Web Token from the JSON and put it inside a cookie.
    }
} catch(err){
    setErrorMessage("An error occurred while trying to register.")
    console.error(err)
}

```

POST ('api/v1/login') -> Sends a login request to the backend. Requires a JSON body of {username: test, password: test} to be sent. (Test as an example)

### Data routes:
Returns a JSON array of object on success, error on failure.

GET ('api/v1/pets/get-all') -> Return all pets as JSON (Maximum amount needs to be specified later)  
GET ('api/v1/user:id') -> Return user profile based on ID. 

To be appended further...


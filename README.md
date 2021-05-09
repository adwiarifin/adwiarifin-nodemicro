# README
This project is to learn and prove the concept nodejs and microservices. This project build with `Node.js` with `MongoDB` as database, and `Redis` as caching layer. To secure resource i'm using `jsonwebtoken`.

## List Endpoint
* GET /health  
  To check if service is up or not
* POST /api/auth/token  
  To generate dummy token, no body required
* GET /api/auth/token  
  To check / verify if token is valid. insert authorization on headers.
  ```
  headers:
    Authorization: Basic xxxxx
  ```
* GET /api/user  
  To get list of user. Need Authorization.  
  Other option can be used via query params.
  ```
  GET /api/user?account_number=xxx
  GET /api/user?identity_number=xxx
  ```
  Example:
  ```
  {
    "status": 200,
    "data": [
      {
        "_id": "609832c8b20faf0003838617",
        "id": "21cd1aff-71c1-41b2-b6de-7ffa47358cf9",
        "user_name": "johndoe",
        "account_number": "1234",
        "email_address": "johndoe@gmail.com",
        "identity_number": "1234",
        "__v": 0
      }
    ]
  }
  ```
* POST /api/user  
  To create / store new user.  
  Example Request:
  ```
  {
    "user_name": "johndoe",
    "account_number": "1234",
    "email_address": "johndoe@gmail.com",
    "identity_number": "1234"
  }
  ```
  Example Response:
  ```
  {
    "status": 200,
    "data": [
      {
        "_id": "609832c8b20faf0003838617",
        "id": "21cd1aff-71c1-41b2-b6de-7ffa47358cf9",
        "user_name": "johndoe",
        "account_number": "1234",
        "email_address": "johndoe@gmail.com",
        "identity_number": "1234",
        "__v": 0
      }
    ]
  }
  ```
* GET /api/user/:id
  To get single user, id that be used is id with format uuid. ex: `21cd1aff-71c1-41b2-b6de-7ffa47358cf9`  
  Example:
  ```
  {
    "status": 200,
    "data": {
      "_id": "609832c8b20faf0003838617",
      "id": "21cd1aff-71c1-41b2-b6de-7ffa47358cf9",
      "user_name": "johndoe",
      "account_number": "1234",
      "email_address": "johndoe@gmail.com",
      "identity_number": "1234",
      "__v": 0
    }
  }
  ```
* PUT /api/user/:id  
  To update data user.  
  Example Request:
  ```
  {
    "user_name": "johndoe",
    "account_number": "1234",
    "email_address": "johndoe@gmail.com",
    "identity_number": "1234"
  }
  ```
  Example Response:
  ```
  {
    "status": 200,
    "data": [
      {
        "_id": "609832c8b20faf0003838617",
        "id": "21cd1aff-71c1-41b2-b6de-7ffa47358cf9",
        "user_name": "johndoe",
        "account_number": "1234",
        "email_address": "johndoe@gmail.com",
        "identity_number": "1234",
        "__v": 0
      }
    ]
  }
  ```
* DELETE /api/user/:id  
  To Delete user data.
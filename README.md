# SocialAPI-Ex

This is an API which provides the following features relating to a Social Media platform:

## Features

User - Create, read, update and delete your user account.
Post - Create, read, update and delete posts from a given user.

## Endpoints

/login/

### Users

- /user/create/
- /user/update/
- /user/delete/
- /user/view/:userID
- /user/getposts/:userID

### Posts

- /post/create/
- /post/view/:postID
- /post/update/:postID
- /post/delete/:postID
- /post/get/:amount

## Outline

1. Define the API endpoints: First, decide which endpoints you want to create. For example, you might have endpoints for creating a user account, logging in, retrieving a user's profile information, creating a post, getting all posts, getting posts by a specific user, liking a post, and following a user.

2. Create the API routes: Once you have defined your endpoints, create the corresponding routes in your Express app. Each route should handle the HTTP method and endpoint path and call the appropriate function to perform the corresponding action.

3. Implement the API functions: Next, implement the functions that perform the actual actions for each endpoint. For example, the function for creating a user account might create a new user in your database, while the function for creating a post might add a new post to your database.

4. Use a database: To store user and post data, you'll need to use a database. There are many options to choose from, such as MongoDB, MySQL, or PostgreSQL.

5. Implement authentication and authorization: To ensure that only authorized users can access certain endpoints or perform certain actions, you'll need to implement some form of authentication and authorization. You might use JSON Web Tokens (JWTs) or session cookies to authenticate users, and you might use middleware to check if a user is authorized to access a particular endpoint.

6. Test your API: Finally, test your API to ensure that each endpoint works as expected. You can use tools like Postman or Insomnia to test your API endpoints and ensure that they return the expected responses.

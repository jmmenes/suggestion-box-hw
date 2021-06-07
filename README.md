# MErN--Suggestion-box

Mongo Express Node suggestion-box-hw

Use Postman and Robo 3T to test your routes
Use MongoDB and Mongoose and name database suggestion-hw
Use Async and Await (Don't forget the try and catch block)
Use controllers for business logic.
Remember to be inside folder and npm i\*
Only .gitignore the node_modules

INSTRUCTIONS:

1. Create an express server using express-generator: express suggestion-box-hw --view=ejs
2. npm i
3. Delete all view related items
4. Connect to mongodb with mongoose. Remember to name database suggestion-hw.
5. In routes folder create a suggestions folder, then create suggestionRouter.js inside suggestion folder and make sure you connect it through app.js with the path '/api/suggestions'
6. In suggestion folder, create model folder and controller folder.

7. In model folder, create a file called Suggestion.js: Build a schema for Suggestions called SuggestionSchema

- title - should be a string, lowercase, unique, required
- author - should be a string, lowercase
- suggestion - should be a string, lowercase and required
- likes - should be a number and default to 0
- anonymous - should be a boolean
- timeCreated - should be a date with default Date.now

7. In controller folder, create a file called suggestionController.js

- getAllSuggestions
- getSingleSuggestion - get one suggestion based on id using parameters
- createSuggestion- does not need id or time from user
- updateSuggestion- user can only update title and suggestion
- deleteSuggestion - suggestion deletes based on id

8. Hook it up to suggestionRouter.js

- GET /all-suggestions
- GET /single-suggestion
- POST /create-suggestion
- UPDATE /update-suggestion
- DELETE /delete-suggestion

Extra Credit- - Make a GET /by-author-suggestion using query - getSuggestionsByAuthor- if i query a author's name i should get a list of their suggestions

Hint:
in url www.shop.com/products/?item=shoes
in code req.query.item equals shoes

Submit Github Link in Essay

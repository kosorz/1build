# Hello 1build

## Live Version
Keep in mind that cold start might occur  
https://whispering-sierra-98476.herokuapp.com/ 

## AWS Lambda
Written using Golang and exposed via proxy integrated REST gateway to provide your posts in paginated fashion:  
https://agt9hdkay8.execute-api.us-east-2.amazonaws.com/default/1build-feed-paginated?page=1&perPage=2  
Code:  
https://gist.github.com/kosorz/9509b25a0addd45bd285426343f6e309  
If you will change the amount of posts available under  
https://1b-public.s3-us-west-1.amazonaws.com/blog-posts.json  
without changing the URI anatomy this lambda will serve the updated content automatically

## Development Prerequisites

Install dependencies:
### `npm install`

## Available Scripts

To run the project in the development mode simply use:
### `npm start`
Once done your browser should open with the project running otherwise use this link: http://localhost:3000/

To test the code run:
### `npm test`

## Stuff I would do if I was to deploy it for production purposes
- translations
- more tests
- change page title to a dynamic location indicator
- add favicon
- enable using theme within global styles
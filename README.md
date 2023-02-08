# Star Wars API docs: SWAPI - The Star Wars API

## Goal

1 The aim is to make a GET request to the Star Wars people end point and for the App component to display the title of the fourth person that comes back from the API end point (name: 'Darth Vader').

https://swapi.dev/api/people/4

2 Other aim is to add msw to mock (or "stub") the API response and
to use mock server to write a test to check the fourth person that mock server should return is being correctly rendered to the page.

3 Test that checks that component displays an error message saying "Oops... something went wrong, try again 🤕" if the API returns Status Code 500 (Internal Server Error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 ).

4 Another test checking that component displays an error message saying "418 I'm a tea pot 🫖, silly" in the scenario the API returns Status Code 418 (I’m a tea pot: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 )

## Running the application

To start the application run:

```
npm install
```

Followed by:

```
npm start
```

You should then be able to access the application by opening the browser and visiting

[http://localhost:3000](http://localhost:3000)

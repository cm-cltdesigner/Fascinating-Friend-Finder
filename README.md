# Welcome to the Fascinating Friend Finder App.
<img src="https://i.ibb.co/WWvtqWp/fff-app.jpg"><br>
A compatibility-based "FriendFinder" application was build in the repo. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## How does it work?
This App is a full stack node app deployed on Heroku. Data is saved on a file, instead of a database. It uses `Express` to configure and operate the server, `Body-Parser` to pass the json data back and forth between files & functions, and `fs` to read & write from the data files on the server. Many routes are setup to complete the survey, to view the JSON API, and post data into the app. One route file will bring all users to the homepage, regardless of the path the user attempts to access.

## How can I use the app?
Deployment on a node server is required. This app is setup to listen on a Heroku default port; in the absence of Heroku, it listens to local port of 3000 instead. <img src="https://i.ibb.co/D41Cp8h/Screen-Shot-2019-05-05-at-2-14-16-PM.png"><br>
 After downloading the repository, run `npm i` from the command line to ensure you have the necessary packages included in the package.json file.

## Example of the Fascinating Friend Finder App
Feel free to visit the [Live Demo](https://cm-cltdesigner.github.io/Fascinating-Friend-Finder/)


## Future Development
For future development I would love to add more css features for the users interface. Along with perfecting the functionality with the api routes.

## License
CREATED BY: COURTNEY MANERY, GITCREATIV LLC | 2019<br>
[MIT](https://choosealicense.com/licenses/mit/)
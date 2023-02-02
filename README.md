# cbtserver
Server for computer base Test developed using MERN(MongoDB Express, React, Nodejs) Stack
The server is an express application that returns a json response. It has three end points
-login
-exam
-scores.

**Login End Point**
It validate a user against a database record. If user exist the user will be taken to examination page, if it does not a new record will be created.

**Exam End Point**
It fetch questions from a database of questions

**Scores End Point**
Store user scores on first attempt, update on subsequent attempt

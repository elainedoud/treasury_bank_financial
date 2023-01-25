# Treasury Bank Financial 

## Description

My project is inspired by banking websites.  I have created multiple personas with names, email addresses, and checking account transactions.  Their checking accounts can be viewed by logging into the website with their information.  This website incorporates authorizations and sessions which is demonstrated by the user being able to login (and out) of the website.  A page of the website also encourages new users to enter personal information and become new members of the bank. This project has a React frontend with Rails as the backend.

## To View

- Clone directory
- On one port (in one terminal) run Rails  (rails s)
- On another port (in another terminal) run NPM (start npm --prefix client)

## React

My frontend is made up of a Login page, Checking page, and Enroll page.  The Login page and Enroll page have forms to login and/or enroll respectively.  The checking page is a table that displays the date, dollar amount, and description of the checking transactions.  If a user is not logged in, this page is blank.

## Rails

My backend is made up of four tables: Users, Client, Accounts, and Transactions. Client is the join table between users and accounts.  Transactions are the child table of Accounts.  I created four different users, as well as checking accounts and transactions for them.  There is one joint account (James and Jennifer Smith), and they both have the same transactions.  I then seeded this data into the project using the seeds file in the database (db).

My backend uses models, routes, controllers, and serializers.  They make the functionality of logging in/out, creating new users, and displaying checking transactions possible.

## CSS
I installed the CSS Framework Bootstap 5.0.  This helped with providing structure for tables, forms, and buttons, as well as providing the colors I used.
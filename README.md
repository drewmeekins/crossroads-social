-Crossroads Social is a platform meant to bring individuals together based on their general locations and interests. -The app includes full CRUD with multiple variations of creating and updating methods. -The app fully uses Mongoose, Express and EJS for my Front End -It also has the MVP requirement of a MVC full directory.

-The main goal of this app was to give users the opportunity to create their own personalized profiles and which includes bios and photos they chose to upload.

-Once a user creates their profile, they will be able to share their information on the main Index Page. Each profile will have login functionality that allows users to edit their profiles as well as delete them.

-A stretch goal that will I will continue to work on is adding a comment section to each profile for users to be able to interact with each other. The comment form currently shows on each profile, but needs some more work with its functionality.

-Index Page
![image](https://user-images.githubusercontent.com/108498113/189937581-acb5d498-e296-4e88-a9a0-85998066e90f.png)

-Sign Up Page
![image](https://user-images.githubusercontent.com/108498113/189937664-5ec67c0b-2ee7-4523-bc7c-ee33ff99105a.png)

-Sign In Page
![image](https://user-images.githubusercontent.com/108498113/189937759-56a7e192-cfd7-4633-92fe-771a7dfb43dc.png)

-Profile Page
![image](https://user-images.githubusercontent.com/108498113/189937837-270de81d-6710-44ce-8f53-eecf251e0e62.png)

-Edit Profile Page
![image](https://user-images.githubusercontent.com/108498113/189938088-025ccc1c-4b48-4f25-b37b-c9a97dd1ebd3.png)

Routes
--USERS
GET/index - index home page
GET/signin - sign in page
POST/signin - sign in page
GET/signup - sign up page
POST/signup - sign up page
GET/profile/:id - user profile page
POST/profile/editprofile - user edit profile page
DELETE/profile/delete - deletes logged in user's profile

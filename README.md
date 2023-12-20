# Shorten URL system
 短網址系統 [Shorten URL](http://54.206.62.215/)
- A website platform that can shorten URLs and redirect through a back-end server.
  
1. Verify that the short URL is not duplicated by accessing the database. Redirect a specific website through a shortened URL.
2. Finish Model-view-controller (MVC) structure.
3. Finish deploy project to AWS EC2.

### **Technique Overview**
- Database
    - MongoDB (NoSQL)
- AWS
    - EC2
- Frontend
    - JavaScript
    - AJAX
    - CSS
- Backend
    - Node.js
    - Express
    - RESTful API
    - npm
    - Nginx
    - dotenv


## Highlights
- Enter a URL, store the original URL in the database, generate a unique shortened URL, and enable redirection to the original URL.
  ![Shorten URL](https://github.com/wun-yu-lin/short_url_system/blob/main/demo/shortenURL.gif?raw=true)

  
## Project architecture
- Implementing an MVC system using the Node.js with Express framework, and integrating with the MongoDB Atlas database through the Mongoose package.
  ![architecture](https://github.com/wun-yu-lin/short_url_system/blob/main/demo/architecture.png?raw=true)


# REST-API Assignment

A Node.js project using Express to create a RESTful API for retrieving user data from a JSON file.

---

## Folder Structure

```plaintext
├── images/          # Screenshots 
├── index.js         # Main server file
├── users.json       # User data
├── package.json     # Project details
```

---

## API Endpoints

1. **GET /users** - Get all users  
2. **GET /users/:id** - Get user by ID  
3. **GET /users/profession/:profession** - Get users by profession  
4. **GET /users/name/:name** - Get user by name  

---

## How to Run

1. Install dependencies: `npm install`  
2. Start the server: `node index.js`
   or `npm run start` (nodemon) or `npm run dev `  
4. Access the API at `http://localhost:5000`.  

---

## Testing

Use Postman or any REST client to test the endpoints.

---


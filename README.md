# MERN-shoppingList

Shopping list using MERN stack (Mongo-Express-Reactjs-Nodejs)

If you pull this project it will be mising a config folder with the default.json file which will hold the mongo uri and jwt secret. You need to create the folder in root directory yourself and add your own uri and secret in default.json file.

```json
{
  "mongo_URI": "Your Mongo DB UI",
  "jwtSecret": "Your jwt secret"
}
```

Note: If you are making local calls remember to uncomment line 14 on server.js file to avoid CORS error

```javascript
// for CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});
```

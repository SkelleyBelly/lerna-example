import express from "express";

const app = express();
const port = 4000; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start the Express server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});

import express from "express";
const app = express();

// Set GET route for handling query strings
app.get("/get", (req, res) => {
// Access query parameters
    const queryParams = req.query;
// Log query parameters to console & send response to client
    console.log("Query parameters:", queryParams);
    res.send("Query string handling - check console");
});
// 404 error for invalid routes
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});
// Set server to listen on provided port or default to 3000 and log confirmation
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
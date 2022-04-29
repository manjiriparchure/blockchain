const express = require("express");
const morgan = require("morgan");
const app=express();
app.use(morgan("dev"));
const port = 8080
require("./routes")(app);

app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});

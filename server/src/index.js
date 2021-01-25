const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

app.use(bodyParser.json());
app.use("/api/users", require("./routes/user"));
app.listen(port, () => console.log(`server listning in port ${port}`));

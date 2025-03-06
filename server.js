const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

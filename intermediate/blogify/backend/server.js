const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dBconnection = require("./dBConnection");
const postRoutes = require("./routes/post");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

// Database connection
dBconnection(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) =>
    console.log(`Something went wrong in mongoDB Error: ${error}`)
  );

// Routes
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.status(200).json("Hello world");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

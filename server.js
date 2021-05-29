const express = require("express");
const app = express();
const connectToDatabase = require("./config/connectToDatabase");
const cors = require("cors");
var path = require("path");

//Function that connects express app to database
connectToDatabase();

//We prevent from cors policy warning
app.use(cors());

//Allows us to use body json thing to create posts
app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, "uploads")));

//Routes
app.use("/api/posts", require("./routes/posts.js"));
app.use("/api/users", require("./routes/users.js"));

app.use("/galleries", require("./routes/gallery"));
app.use("/stripe", require("./stripePays"));
app.use("/webRtc", require("./webRtc"));
app.use("/recapcha", require("./recapcha"));
app.use('/radioBtn', require('./routes/radioBtn'));
app.use('/posts', require('./pagination'));

app.use("./uploads", express.static("uploads"));

//We specified variable on which port our app will run (depends if heroku will give us port or we specify on 5000)
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));

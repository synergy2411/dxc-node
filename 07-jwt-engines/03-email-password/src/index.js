const { PORT } = require("../environment");
const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const UserRouter = require("./router/user.routes");

// const upload = multer();
const app = express();

const MY_SUPER_SECRET_KEY = "SecretKey";

// app.use(upload.none());          // Application level middleware

app.use(express.json());

app.use("/users", UserRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
  if (req.body) {
    const { email, password } = req.body;
    // Verify the user from database
    // bcrypt.compare(hashedPassword, password)
    if (email && password) {
      const token = jwt.sign({ id: 123 }, MY_SUPER_SECRET_KEY);
      console.log("LOGIN - ", token);
      return res.send({ email, password, token });
    } else {
      return res.send({ message: "not authenticated" });
    }
  }
});

const ensureToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // [Bearer, token]
    const token = authHeader.split(" ")[1];
    if (token) {
      console.log("ENDURE TOKEN - ", token);
      req.token = token;
      next();
    } else {
      return res.send({ message: "token not found" });
    }
  } else {
    return res.send({ message: "Auth header not found" });
  }
};

const tokenVerification = (req, res,next) => {
  jwt.verify(req.token, MY_SUPER_SECRET_KEY, (err, decode)=>{
    if(err){
        return res.send({ message: "not authenticated" });
        // next();
    }
    console.log("DECODE - ", decode);
    return res.send({ message: "authenticated" });
});
}

app.get("/api/protected", ensureToken, tokenVerification);

app.listen(PORT, () => {
  console.log("Server started at PORT : ", PORT);
  require("./db");
});

const app = require("express")();
const axios = require("axios").default;

app.get("/db", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:9001/db");
    if (response && response.data) {
      return res.send({ message: response.data });
    } else {
      return res.send({ message: "Not received" });
    }
  } catch (e) {
    // console.log(e);
    return res.send(e);
  }
});

app.get("/differentRoute", (req, res) => {
  return res.send({ message: "Different Route" });
});

app.listen(9090, () => console.log("Server started at PORT : 9090"));

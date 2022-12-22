const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>")
});

app.get("/blogs", (req, res) => {
  res.send("<h1>detail blogs here</h1>");
});

app.get("/add", (req, res) => {
  res.send("add blogs page here");
});

app.get("/blogs/:id", (req, res) => {
  res.send(`Blog ID : ${req.params.id} <br /> Category Id : ${req.query.category}`)

})

// menjalankan route yang tidak ada > menangani 404
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Page not Found. 404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); 
});

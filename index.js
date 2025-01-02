import express from "express";
import bodyParser from "body-parser";
// import { render } from "ejs";

const app = express();
const port = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  res.render("index.ejs", {posts});
});

app.get('/new', (req, res) => {
  res.render('post.ejs');
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: posts.length + 1, title, content });
  res.redirect('/');
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
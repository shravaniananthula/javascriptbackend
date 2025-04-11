const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const github = {
  login: "shravaniananthula",
  id: 35376752,
  node_id: "MDQ6VXNlcjM1Mzc2NzUy",
  avatar_url: "https://avatars.githubusercontent.com/u/35376752?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/shravaniananthula",
  html_url: "https://github.com/shravaniananthula",
  followers_url: "https://api.github.com/users/shravaniananthula/followers",
  following_url:
    "https://api.github.com/users/shravaniananthula/following{/other_user}",
  gists_url: "https://api.github.com/users/shravaniananthula/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/shravaniananthula/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/shravaniananthula/subscriptions",
  organizations_url: "https://api.github.com/users/shravaniananthula/orgs",
  repos_url: "https://api.github.com/users/shravaniananthula/repos",
  events_url: "https://api.github.com/users/shravaniananthula/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/shravaniananthula/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 2,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2018-01-12T16:12:37Z",
  updated_at: "2025-02-12T21:03:43Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("shravaniananthula");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login at this website</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});
app.get("/github", (req, res) => {
  res.json(github);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

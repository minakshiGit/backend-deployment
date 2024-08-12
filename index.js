require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
 res.send('<h1>Welcome Node Login</h1>');
})
app.get('/dashboard',(req,res)=>{
    res.send('<h2>Welcome to Node Dashboard</h2>');
})
const githubdata = {
    "login": "minakshiGit",
    "id": 12527663,
    "node_id": "MDQ6VXNlcjEyNTI3NjYz",
    "avatar_url": "https://avatars.githubusercontent.com/u/12527663?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/minakshiGit",
    "html_url": "https://github.com/minakshiGit",
    "followers_url": "https://api.github.com/users/minakshiGit/followers",
    "following_url": "https://api.github.com/users/minakshiGit/following{/other_user}",
    "gists_url": "https://api.github.com/users/minakshiGit/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/minakshiGit/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/minakshiGit/subscriptions",
    "organizations_url": "https://api.github.com/users/minakshiGit/orgs",
    "repos_url": "https://api.github.com/users/minakshiGit/repos",
    "events_url": "https://api.github.com/users/minakshiGit/events{/privacy}",
    "received_events_url": "https://api.github.com/users/minakshiGit/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2015-05-20T10:45:31Z",
    "updated_at": "2024-08-12T07:56:15Z"
  }
  app.get('github',(req,res) => {
    app.json(githubdata);
  })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
    console.log(`Example app listening on port ${port}`)
  })


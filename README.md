# Nodejs + Github Authentication Library

## Run locally

Make sure to install nodemon locally in global mode

`npm install -g nodemon`

and

`npm run dev` to start


### Github OAuth flow explained

https://github.com/octokit/octokit.net/blob/master/docs/oauth-flow.md

### TODO

Implement a package to consume Github auth code and return access token

### Errors

```
{
  "message": "Bad credentials",
  "documentation_url": "https://developer.github.com/v3"
}
```

Make sure to include `Authorization: Bearer <accessToken>` In your header
<div align="center">
  <h1>Express + GraphQL</h1>

  <p>express + graphql + postgresql integration for client's task</p>
</div>

## Getting Started and Installation

This guide will walk you through on how to run this locally

#### Setup

- download and install **Git** ([check it here](https://git-scm.com/downloads)). To verify that you successfully installed git, you can run `git --version`
- download and install **Node.js** ([check it here](https://nodejs.org/en/download)). To verify that you successfully installed nodejs and npm (since its already bundled with nodejs), you can run `node -v` and `npm -v`
- download and setup **PostgreSQL** ([follow this guide](https://www.postgresqltutorial.com/install-postgresql/))
- create your own database and own database user, ([follow this guide](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e))

#### Getting the project

- clone this repo: `git clone git@github.com:Hyperstacks-Inc/haibe-online-backend.git && cd ./haibe-online-backend`
- run `npm install`

#### Getting the env variables

The app will not run when don't have a env file setup locally. To get that set up, copy the provided example env file to the real location:

```
cp .env.sample .env
```

#### Finally

You can now run the app, just type the command `npm run start` and you're good to go!

> Note: If you encountered any errors along the way you can contact the lead developer to assist you, or you can try to fix it and update the README :wink:

#### Running tests

PS: Currently, the app don't have unit tests but it does have e2e tests just run `npm run test:e2e`

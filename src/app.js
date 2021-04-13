require("dotenv").config();

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { GraphQLDateTime } = require("graphql-iso-date");
const { v4: uuid } = require("uuid");
const { incrementDay } = require("./config/utils");
const { isValid, parseISO } = require("date-fns");

// repo
const { Log } = require("./repositories");

const app = express();

const GraphQLSchema = buildSchema(`
  scalar Date,

  type Log {
    id: ID
    correlationId: ID
    input: Date
    output: Date
  },

  type Query {
    greetings: String!
    logs: [Log!]!
  },

  type CreateLogResponse {
    output: Date,
    error: String
  }

  type Mutation {
    log(input: String!): CreateLogResponse!
  }
`);

const root = {
  Date: GraphQLDateTime,
  greetings: () => "Welcome to my sample!",
  logs: async () => {
    try {
      return await Log.findAll();
    } catch (err) {
      return [];
    }
  },
  log: async ({ input }) => {
    if (!isValid(parseISO(input))) {
      return {
        error: "Please provide a valid date",
      };
    }

    const output = incrementDay(input);

    try {
      await Log.create({
        correlationId: uuid(),
        input: new Date(input).toISOString(),
        output: output.toISOString(),
      });

      return { output };
    } catch (err) {
      return { output };
    }
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: GraphQLSchema,
    rootValue: root,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.redirect("/graphql");
});

module.exports = app;

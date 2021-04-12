const request = require("supertest");
const app = require("../src/app");
const { db } = require("../src/config/db");

describe("GraphQL", () => {
  beforeAll(async () => {
    await db.truncate();
  });

  it("should successfully return an empty array", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({ query: "{ logs { id, correlationId, input, output } }" });

    expect(res.status).toEqual(200);
    expect(res.body.data.logs).toEqual([]);
  });

  it("should create a log", async () => {
    const date = new Date();
    const res = await request(app)
      .post("/graphql")
      .send({ query: `mutation { log(input: "${date.toISOString()}") }` });

    const result = date.setDate(date.getDate() + 1);

    expect(res.status).toEqual(200);
    expect(res.body.data.log).toEqual(new Date(result).toISOString());
  });

  it("should return the created log inside the array", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({ query: "{ logs { id, correlationId, input, output } }" });

    expect(res.status).toEqual(200);
    expect(res.body.data.logs).toHaveLength(1);
    expect(res.body.data.logs[0]).toHaveProperty("id");
    expect(res.body.data.logs[0]).toHaveProperty("correlationId");
    expect(res.body.data.logs[0]).toHaveProperty("input");
    expect(res.body.data.logs[0]).toHaveProperty("output");
  });

  afterAll(() => {
    db.close();
  });
});

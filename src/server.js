const app = require("./app");

app.listen(process.env.PORT ? process.env.PORT : 8080, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

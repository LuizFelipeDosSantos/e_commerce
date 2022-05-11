const app = require("./app");

const PORT = process.env.PORT || 5007;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

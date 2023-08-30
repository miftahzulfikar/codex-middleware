const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");

const sheets = google.sheets({
  version: "v4",
  auth: "AIzaSyAN77FP5EQeqWt5kw5bQXw5XNDmJkDpoVg",
});

const params = {
  spreadsheetId: "1XTDu_6JuLsLoXy2OcqnjUDCCHTOzZDxxqPadxrWRfyk",
  range: "Action!A2:F",
};

const app = express();
app.use(cors());
const port = 3000;

app.get("/get", async (req, res) => {
  const data = await sheets.spreadsheets.values.get(params, (err, result) => {
    if (err) {
      console.error(err);
      throw err;
    }
    res.send(result.data.values);
  });
});

app.listen(port, "lite-dev9.tokopedia.com", () => {
  console.log(`codex middleware is listening at http://localhost:${port}`);
});

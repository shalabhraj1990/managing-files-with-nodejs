const { convertCsv } = require("./csv.parse");
const { readFile } = require("fs");

readFile("./data/pulitzer-circulation-data.csv", "utf-8", (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  const vals = convertCsv(data);
  console.table(vals);
});

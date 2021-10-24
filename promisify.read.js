const { convertCsv } = require("./csv.parse");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
//promise
readFile("./data/pulitzer-circulation-data.csv", "utf-8")
  .then((data) => console.table(convertCsv(data)))
  .catch((err) => console.log(`file error ${err}`));

//async-await
const read = async () => {
  const data = await readFile("./data/pulitzer-circulation-data.csv", "utf-8");
  console.table(convertCsv(data));
};

const fs = require("fs");
const { builtinModules } = require("module");
const fd = fs.openSync("./data/app.log");
let count = 0;
do {
  const buffer = Buffer.alloc(200);
  count = fs.readSync(fd, buffer, 0, buffer.length, null);
  console.log(buffer.toString());
} while (count > 0);
fs.closeSync(fd);

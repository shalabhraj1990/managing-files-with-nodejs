const { writeFile } = require("fs");
writeFile(
  "./data/app.log",
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "write test" 405 21512',
  { flag: "a" },
  (err) => {
    return err ? console.log(err) : console.log("file saved !!!");
  }
);

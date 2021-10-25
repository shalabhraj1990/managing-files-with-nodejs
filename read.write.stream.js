const { createReadStream, createWriteStream } = require("fs");
const steam = createReadStream("./data/app.log", {
  highWaterMark: 9950,
  encoding: "utf-8",
});
const write = createWriteStream("./data/output.log");
steam.on("data", (data) => {
  steam.pause();
  console.log(data);
  write.write(data);
  setTimeout(() => {
    steam.resume();
  }, 1000);
});

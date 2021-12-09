const fs = require("fs");

fs.readdirSync("./ftm").map((fileName) => {
  const addr = fileName.split(".png")[0];
  if (addr === fileName) {
    console.log("error with ", fileName);
  } else {
    fs.mkdirSync(`./ftm/${addr}`, { recursive: true });
    fs.copyFileSync(`./ftm/${fileName}`, `./ftm/${addr}/logo.png`);
  }
});

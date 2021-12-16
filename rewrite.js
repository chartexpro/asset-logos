const fs = require("fs");
const { from } = require("@iotexproject/iotex-address-ts");
const { toChecksumAddress } = require("ethereum-checksum-address");

fs.readdirSync("./iotex").map((fileName) => {
  let addr = fileName.split(".png")[0];
  if (addr === fileName) {
    console.log("error with ", fileName);
  } else {
    let addrIo = from(addr);
    let addrEth = addrIo.stringEth();
    let checkedAddr = toChecksumAddress(addrEth);
    fs.mkdirSync(`./iotex/${checkedAddr}`, { recursive: true });
    fs.copyFileSync(`./iotex/${fileName}`, `./iotex/${checkedAddr}/logo.png`);
  }
});

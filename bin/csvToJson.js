import fs from "fs";
import hash from "./hash.js";

const cvsToJsonConverter = (file) => {
  const nftCvs = fs.readFileSync(file);
  const arrNftCvs = nftCvs.toString().split("\n");

  let nftObject = [];
  const nftCvsHeader = arrNftCvs[0].split(",");

  for (let i = 1; i < arrNftCvs.length; i++) {
    let nftData = arrNftCvs[i].split(",");
    let obj = {};
    for (let j = 1; j < nftData.length; j++) {
      obj[nftCvsHeader[j]] = nftData[j].trim();
    }

    const hashObj = hash(JSON.stringify(obj));
    console.log(hashObj);
    obj.hashr = hashObj;
  }
  return JSON.stringify(nftObject);
};

export default cvsToJsonConverter;

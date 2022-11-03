#!/usr/bin/env node
import { cli } from "./cli.js";
import hastInfo from "./bin/hash.js";
import cvsToJsonConverter from "./bin/csvToJson.js";
const objJson = cvsToJsonConverter("./sandPaper.csv");
const hast = hastInfo(objJson);
console.log(hast);
console.log(objJson);

cli(process.argv);

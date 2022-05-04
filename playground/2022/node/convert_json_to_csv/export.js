// const fs = require("fs");
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const inventory = require("./inventory.json");
// import inventory from "./inventory.json" assert { type: `json` };
// import inventory from "./inventory.json" assert { type: `json` };

function arrayToCSV(data) {
  let csv;
  csv = data.map((row) => Object.values(row));
  csv.unshift(Object.keys(data[0]));
  return csv.join("\n");
}

const exportFile = () => {
  let csv = arrayToCSV(inventory);

  console.log(csv);

  fs.writeFile("inventory.csv", csv, "utf8", function (err) {
    if (err) {
      console.log(
        "Some error occured - file either not saved or corrupted file saved."
      );
    } else {
      console.log("saved");
    }
  });
};

exportFile();

// module.exports = {
//   exportFile,
// };

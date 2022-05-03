// const fs = require("fs");
import fs from "fs";

// const inventory = require("./inventory.json");
import inventory from "./inventory.json" assert { type: `json` };

function arrayToCSV(data) {
  csv = data.map((row) => Object.values(row));
  csv.unshift(Object.keys(data[0]));
  return csv.join("\n");
}

const exportFile = () => {
  let csv = arrayToCSV(inventory);

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

module.exports = {
  exportFile,
};

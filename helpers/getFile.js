const fs = require("fs");

const getFile = (file) => {
  try {
    let data = fs.readFileSync(file, { encoding: "utf8" });
    return data;
  } catch (err) {
    console.error(err);
  }
};

exports.getFile = getFile;

const { assignRandomValues } = require("../helpers/assignRandomValues");
const { getFile } = require("../helpers/getFile");

const assignUsers = (pathToFile, separator) => {
  try {
    let file = getFile(pathToFile);
    const list = file.split(separator);
    return assignRandomValues(list);
  } catch (err) {
    console.error(err.message);
  }
};

exports.assignUsers = assignUsers;

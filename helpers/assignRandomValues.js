const assignRandomValues = (list, hasHeaders = true) => {
  let arr = list;
  if (hasHeaders) {
    arr.shift();
  }
  if (arr.length <= 1) {
    return "Please use a list that has at least 2 values";
  }
  for (let u = 0; u < arr.length; u++) {
    let m = getRandom(u);
    let temp = arr[u].split(",");
    let temp2 = arr[m].split(",");
    return `${temp[1]} -> ${temp2[1]}`;
  }
};

const getRandom = (curser) => {
  let assigned = [];
  let notFound = false;
  let m;
  do {
    m = Math.floor(Math.random() * 3);
    notFound = assigned.includes(m) === false && curser != m ? true : false;
  } while (!notFound);
  assigned.push(m);
  return m;
};

exports.assignRandomValues = assignRandomValues;

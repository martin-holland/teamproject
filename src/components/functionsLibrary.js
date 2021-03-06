// we use a function instead of import to add a layer and hide the source
function getLangs() {
  const languages = require("./languages.json");
  return languages;
}

function postData(inputObject) {
  let JSONData = JSON.stringify(inputObject);

  try {
    fetch(`http://localhost:3000/languages`, {
      method: "POST",
      mode: "cors",
      body: JSONData,
      headers: {
        "Content-type": "application/json",
        charset: "UTF-8",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLangs,
  postData,
};

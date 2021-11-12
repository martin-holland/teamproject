import { FetchWrapper } from "./fetchwrapper.js";

function getData() {
  new FetchWrapper.get("http://localhost:3000/languages");
}

console.log(getData);

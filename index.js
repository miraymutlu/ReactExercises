import data from "./app.js";

data(1)
    .then(data => console.log(data))
    .catch(e => console.log(e))
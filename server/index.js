const express = require("express");

const controller = require("./controller");
//! for clarity's sake you can store your server methods in a controller file

const app = express();
app.use(express.json());

//*SERVER ENDPOINTS GO BELOW THIS

const port = 4040;
app.listen(port || 4040, () => {
  console.log(`<----- SERVER IS LISTENING ON PORT ${port} ----->`);
});

// const Twitter = require('twitter');
// const cliente=new Twitter({
//     consumer_key:'AD3tYgPaUTvREztpYNyYAKdhI',
//     consumer_secret:'iq0BlZhOrK0fMUSXv0DsztqVaTtWeKyzJsgYjQWScbNgtPYPR2',
//     access_token_key:'197122601-p4an6Bw79H84Nfr42bD41VGb8U1VfgMp0kZOLnLk',
//     access_token_secret:'FLSnG0zEnOMFmGVehYpmvod1G77B6eIECZqcXm06JrM1p'
// });
// cliente.post('statuses/update',{status:'El primer tweet del bot desde next'}).then(tweet=>{
// console.log(tweet);
// }).catch(error=>{
//     console.log(error);
// })
// Dependencies
const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const showRoutes = require("./routes/index.js");

    server.use("/api", showRoutes(server));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
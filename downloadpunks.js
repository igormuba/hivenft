var fs = require("fs"),
  request = require("request");
const punks = require("./punks.js");
    let id=1;

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);

    request(uri).pipe(fs.createWriteStream(filename)).on("close", function(){
        console.log(`downloaded ${id}`)
        if (id<=10000){
            id++;
            download(
                `https://files.usehive.com/file/hivepunks/${id}.png`,
                `${id}.png`
              );
        }
    });
  });
};

  download(
    `https://files.usehive.com/file/hivepunks/${id}.png`,
    `${id}.png`
  );

// console.log(punks);

// download(
//   "https://www.google.com/images/srpr/logo3w.png",
//   "google.png",
//   function () {
//     console.log("done");
//   }
// );

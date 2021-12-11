const SSC = require("sscjs");
let express = require("express");
let app = express();
let server = require("http").createServer(app);
const path = require("path");
const fs = require("fs");
const punks = require("./punks").array;

const ssc = new SSC("https://api.hive-engine.com/rpc");

// ssc.getContractInfo("nftmarket", (err, result) => {
//   /*
// 	{
// 	    "name": "tokens",
// 	    "owner": "steemsc",
// 	    "code": "...source code of the contract...",
// 	    "tables": [
// 	        "tokens_tokens",
// 		...
// 	    ],
// 	    "$loki": 1
// 	}
// 	*/
// });

// ssc.find(
//   "nft",
//   "PUNKinstances",
//   { account: "igormuba" },
//   1000,
//   0,
//   [],
//   (err, result) => {
//     /*
//       {
//           "name": "tokens",
//           "owner": "steemsc",
//           "code": "...source code of the contract...",
//           "tables": [
//               "tokens_tokens",
//           ...
//           ],
//           "$loki": 1
//       }
//       */
//   }
// );

//PUNKsellBook:
//{ priceDec: { $lt: 40.0 } }
// ssc.find(
//   "nftmarket",
//   "PUNKsellBook",
//   { priceDec: { $lt: 40.0 } },
//   1000,
//   0,
//   [],
//   (err, result) => {
//     /*
//       {
//           "name": "tokens",
//           "owner": "steemsc",
//           "code": "...source code of the contract...",
//           "tables": [
//               "tokens_tokens",
//           ...
//           ],
//           "$loki": 1
//       }
//       */
//   }
// );

// ssc.find("nftmarket", "PUNKsellBook", {}, 1000, 0, [], (err, result) => {
//   let smallest = result.reduce(function (prev, curr) {
//     return parseFloat(prev.price) < parseFloat(curr.price) ? prev : curr;
//   });
//   ssc.find(
//     "nftmarket",
//     "PUNKsellBook",
//     { priceDec: { $lte: parseFloat(smallest.price) + 1 } },
//     1000,
//     0,
//     [],
//     (err, result) => {
//       let smallest = result.reduce(function (prev, curr) {
//         return parseFloat(prev.price) < parseFloat(curr.price) ? prev : curr;
//       });

//       ssc.find(
//         "nftmarket",
//         "PUNKsellBook",
//         { priceDec: { $lte: parseFloat(smallest.price) + 1 } },
//         1000,
//         0,
//         [],
//         (err, result) => {
//           let smallest = result.reduce(function (prev, curr) {
//             return parseFloat(prev.price) < parseFloat(curr.price)
//               ? prev
//               : curr;
//           });
//           ssc.find(
//             "nftmarket",
//             "PUNKsellBook",
//             { priceDec: { $lte: parseFloat(smallest.price) + 1 } },
//             1000,
//             0,
//             [],
//             (err, result) => {

//               let smallest = result.reduce(function (prev, curr) {
//                 return parseFloat(prev.price) < parseFloat(curr.price)
//                   ? prev
//                   : curr;
//               });
//             }
//           );
//         }
//       );
//     }
//   );
// });
const listingPath = path.join(__dirname, "client");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});
app.get("/cheapestpunks", (req, res) => {
  ssc.find("nftmarket", "PUNKsellBook", {}, 1000, 0, [], (err, result) => {
    let smallest = result.reduce(function (prev, curr) {
      return parseFloat(prev.price) < parseFloat(curr.price) ? prev : curr;
    });
    ssc.find(
      "nftmarket",
      "PUNKsellBook",
      { priceDec: { $lte: parseFloat(smallest.price) + 1 } },
      1000,
      0,
      [],
      (err, result) => {
        let smallest = result.reduce(function (prev, curr) {
          return parseFloat(prev.price) < parseFloat(curr.price) ? prev : curr;
        });

        ssc.find(
          "nftmarket",
          "PUNKsellBook",
          { priceDec: { $lte: parseFloat(smallest.price) + 1 } },
          1000,
          0,
          [],
          (err, result) => {
            let smallest = result.reduce(function (prev, curr) {
              return parseFloat(prev.price) < parseFloat(curr.price)
                ? prev
                : curr;
            });
            ssc.find(
              "nftmarket",
              "PUNKsellBook",
              { priceDec: { $lte: parseFloat(smallest.price) + 1 } },
              1000,
              0,
              [],
              (err, result) => {
                // let smallest = result.reduce(function (prev, curr) {
                //   return parseFloat(prev.price) < parseFloat(curr.price)
                //     ? prev
                //     : curr;
                // });
                let response = [];
                for (let i of result) {
                  let punkdata = punks.filter((current) => {
                    return current.id == i.nftId;
                  });
                  // console.log(punkdata[0]);
                  response.push({ ...i, ...punkdata[0] });
                }
                // console.log("response");
                res.send(
                  response.sort(function (a, b) {
                    if (parseFloat(a.rarity) == parseFloat(b.rarity)) {
                      // rarity is only important when prices are the same
                      return parseFloat(b.price) - parseFloat(a.price);
                    }
                    return parseFloat(a.price) > parseFloat(b.price) ? 1 : -1;
                  })
                );
                // res.json({});
              }
            );
          }
        );
      }
    );
  });
});
app.get("*", (req, res) => {
  // Build the path of the file using the URL pathname of the request.
  const filePath = path.join(listingPath, req.path);
  // If the path does not exist, return a 404.
  if (!fs.existsSync(filePath)) {
    return res.status(404).end();
  }

  // Check if the existing item is a directory or a file.
  if (fs.statSync(filePath).isDirectory()) {
    const filesInDir = fs.readdirSync(filePath);
    // If the item is a directory: show all the items inside that directory.
    return res.send(filesInDir);
  } else {
    const fileContent = fs.readFileSync(filePath, "utf8");
    // If the item is a file: show the content of that file.
    return res.send(fileContent);
  }
});

server.listen(process.env.PORT || 4200);

// This handles the communication with the database / filesystem etc.
const { writeFileSync, createReadStream, readFile, readFileSync } = require("fs");

const GetProducts = (callback) => {
  // default 64kb
  // last buffer - remainder
  // highWaterMark - control size
  // const stream = createReadStream('./model/big.txt', { highWaterMark: 80000 })
  let data = '';
  const stream = createReadStream('./model/big.txt', {encoding: 'hex'});
  
  stream.on('data', (chunk) => {
    data += `${chunk}\n`;
  });
  stream.on('end', () => {
    callback(null, data);
  });

  stream.on('error', (err) => {
    callback(err);
  });
  // let productsData = '';
  // readFile("./model/data.json", {encoding: "utf-8"}, (err, data) => {
  //   if(err) {
  //     return callback(err.message);
  //   }
  //   productsData += data
  // });

  // callback(null, productsData);
}
module.exports = GetProducts;
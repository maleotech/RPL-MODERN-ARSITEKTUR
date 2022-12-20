// const nama = "baihaqi"
// const cetakNama = (nama) => `Hi nama saya ${nama}`;

// console.log(cetakNama(nama))

// console.log(window)
// const fs = require("fs"); // import core module
// const cetakNama = require("./try"); // import local module
// const moment = require('moment')  // import third party / npm / node_modules

const coba = require("./try")

console.log(coba.cetakNama('baihaqi'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang);

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8000);

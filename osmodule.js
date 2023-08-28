const os = require('os');

// console.log("CPU Architecture" + os.arch());

// console.log("Free memory:" + os.freemem());

// console.log("total Free memory:" + os.totalmem());

// console.log("Network interfeces" + JSON.stringify(os.networkInterfaces()));

// console.log("os default temp dir:" + os.tmpdir());

console.log("Endianess:" + os.endianness());

console.log("hostname:" + os.hostname());

console.log("os type:" + os.type());

console.log("os platfrom:" + os.platform());

console.log("os release:" + os.release());
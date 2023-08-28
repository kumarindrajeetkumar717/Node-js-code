const { log } = require('console');
const { LOADIPHLPAPI } = require('dns');
const fs = require('fs');

// console.log('READ START');

// // Asynchronuse way to read file

// fs.readFile('input.txt',function(err,data){
//     if(err) {
//         console.log('Error',err);
//         return err;
//     }
//     console.log('Data',data.toString());
//     return data; 
// });

// console.log('other stuff');

// // synchronous way to read file

// const data = fs.readFileSync('input.txt');
// console.log('data',data.toString());
// console.log('Read end');
// console.log('other stuff');

// open file
 

// fs.open('input.txt','r+', function(err,fd){
//     if(err) {
//         console.log('Error in opening file:', err);
//     } else {
//         console.log('File open successfully!');
//     }

// });

// write file asynch

// fs.writeFile('input.txt','pw skills',function(err){
//     if(err) {
//         console.log('Error in writing file!');
//     } else {
//         console.log('succes in writing file!');
//     }
// })

// // Append to file
// fs.appendFile('input.txt','--indrajeet kumar','utf8',function(err){
//     if(err) {
//     console.log('Error in appending file!');
//     } else {
//         console.log('success in appending file!');
        
        
//     }
// })


//Deleting file


  fs.unlink('input.txt',function(err) {
    if(err) {
        console.log('Error in deleting file!');
    } else {
        console.log('success in deleting file!');
    }
  });

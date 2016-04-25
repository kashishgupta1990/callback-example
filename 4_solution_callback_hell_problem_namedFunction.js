/*
 * Read data from 3 files and write into 1 file via async
 * */
var fs = require('fs');
var result = '';
function readFileOne(err1, data1) {
    if (err1) {
        throw err1;
    } else {
        result += data1.toString() + ' || ';
        fs.readFile('./files/file2.txt', readFileTwo);
    }
}
function readFileTwo(err2, data2) {
    if (err2) {
        throw err2;
    } else {
        result += data2.toString() + ' || ';
        fs.readFile('./files/file3.txt', readFileThree);
    }
}
function readFileThree(err3, data3) {
    if (err3) {
        throw err3;
    } else {
        result += data3.toString();
        fs.writeFile('./files/result.txt', result, writeResult);
    }
}
function writeResult(err) {
    if (err) {
        throw err;
    } else {
        console.log('File Write successfully done.');
    }
}
fs.readFile('./files/file1.txt', readFileOne);
/*
 * Read data from 3 files and write into 1 file via async
 * */
var fs = require('fs');
var result = '';

fs.readFile('./files/file1.txt', function (err1, data1) {
    if (err1) {
        throw err1;
    } else {
        fs.readFile('./files/file2.txt', function (err2, data2) {
            if (err2) {
                throw err2;
            } else {
                fs.readFile('./files/file3.txt', function (err3, data3) {
                    if (err3) {
                        throw err3;
                    } else {
                        result = data1.toString() + ' || ' +
                            data2.toString() + ' || ' +
                            data3.toString();
                        fs.writeFile('./files/result.txt', result, function (err) {
                            if (err) {
                                throw err;
                            }else{
                                console.log('File Write successfully done.');
                            }
                        });
                    }
                });
            }
        });
    }
});
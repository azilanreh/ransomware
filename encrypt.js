var encryptor = require('file-encryptor');
var fs = require('fs');
var path = require('path');

var key = 'test';
var folderPath = './Test';

function encryptAndDelete(originalFilePath) {
    encryptor.encryptFile(originalFilePath, originalFilePath + '.encrypted.data', key, function(err) {
        if (!err) {
            fs.unlinkSync(originalFilePath);
        }
    });
}

fs.readdirSync(folderPath).forEach(file => {
    var filePath = path.join(folderPath, file);

    encryptAndDelete(filePath);
});

console.log('Files encrypted successfully.');

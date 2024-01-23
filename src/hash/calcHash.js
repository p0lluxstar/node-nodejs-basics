import fs from 'fs';
import crypto from 'crypto';

const file = './src/hash/files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    const readStream = fs.createReadStream(file);
    const hash = crypto.createHash('sha256');

    readStream.on('data', function (chunk) {
        hash.update(chunk);
    });

    readStream.on('end', function () {
        const fileHash = hash.digest('hex');
        console.log(fileHash);
    });

    readStream.on('error', function (error) {
        console.error(error.message);
    });
};

await calculateHash();
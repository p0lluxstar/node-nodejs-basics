import fs from 'fs';

const file = './src/streams/files/fileToRead.txt';

const read = async () => {
    const fileStream = fs.createReadStream(file, 'utf-8');
    fileStream.pipe(process.stdout);
};

await read();
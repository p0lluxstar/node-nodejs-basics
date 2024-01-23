import fs from 'fs';

const file = './src/streams/files/fileToWrite.txt';

const write = async () => {
    const fileStream = fs.createWriteStream(file, 'utf-8');
    process.stdin.pipe(fileStream);
};

await write();
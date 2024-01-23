import fs from 'fs';

const file = './src/streams/files/fileToRead.txt';

const read = async () => {
    const fileStream = fs.createReadStream(file);

    fileStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    });
};

await read();
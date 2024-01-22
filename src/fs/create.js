import fs from 'fs';

const pathFile = './src/fs/files/fresh.txt';

const create = async () => {

    fs.access(pathFile, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(pathFile, 'I am fresh and young', (err) => {
                if (err) console.log(err);
            })
            return;
        }
        throw Error('FS operation failed');
    });

};

await create();
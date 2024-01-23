import fs from 'fs';

const oldFile = './src/fs/files/wrongFilename.txt';
const newFile = './src/fs/files/properFilename.md'

const rename = async () => {

    // проверка существует ли файл
    fs.access(oldFile, fs.constants.F_OK, (err) => {
        if (err) {
            throw Error('FS operation failed');
        } else {
            // переименвоание файла
            fs.rename(oldFile, newFile, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }
    });


};

await rename();
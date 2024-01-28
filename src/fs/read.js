import fs from 'fs/promises';

const file = './src/fs/files/fileToRead.txt'

const read = async () => {

    //проверка файла на существование
    fs.access(file, fs.constants.F_OK)
        .then(() => {
            //чтение содержимого из файла
            fs.readFile(file, 'utf-8')
                .then((dataFile) => console.log(dataFile))
                .catch((err) => console.log(err))
        })
        .catch(() => {
            throw Error('FS operation failed');
        })
};

await read();
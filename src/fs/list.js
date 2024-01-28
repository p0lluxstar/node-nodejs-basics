import fs from 'fs/promises';

const folderFiles = './src/fs/files/';

const list = async () => {

    //проверка на существование папки
    fs.access(folderFiles, fs.constants.F_OK)
        .then(() => {
            //вывод массива с именами файлов
            fs.readdir(folderFiles)
                .then((arrNameFiles) => console.log(arrNameFiles))
                .catch((err) => console.log(err))
        })
        .catch(() => {
            throw Error('FS operation failed');
        })

};

await list();
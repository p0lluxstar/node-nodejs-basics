import fs from 'fs/promises';

const file = './src/fs/files/fileToRemove.txt';

const remove = async () => {

    // проверка на существование файла, промис
    fs.access(file, fs.constants.F_OK)
        .then(() => {
            //удалени файла, промис
            fs.unlink(file)
                .catch((err) => console.log(err))
        })
        .catch(() => {
            throw Error('FS operation failed');
        })

};

await remove();
import fs from 'fs';

const folderFiles = './src/fs/files/';
const folderFilesCopy = './src/fs/files_copy/';

const copy = async () => {

    // Eсли files папка не существует или files_copy уже создана, Error
    if (!fs.existsSync(folderFiles) || fs.existsSync(folderFilesCopy)) {
        throw Error('FS operation failed');
    }

    // Создается папка files_copy
    fs.mkdir(folderFilesCopy, err => {
        
        // Получение списка файлов и подпапок в исходной папке
        const files = fs.readdirSync(folderFiles);

        // Создаем файлы в папке сopy
        files.forEach(file => {
            fs.readFile(folderFiles + file, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    fs.writeFile(`${folderFilesCopy + file} `, data, (err) => {
                        if (err) console.log(err);
                    })
                }
            })
            return;
        });

        // не удалось создать папку
        if (err) throw err;
    });

};

await copy();

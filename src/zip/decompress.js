import fs from 'fs';
import zlib from 'zlib';

const gzipFile = './src/zip/files/archive.gz';
const file = './src/zip/files/fileToCompress.txt';

const decompress = async () => {
    // Создаем поток для чтения архивного файла
    const readStream = fs.createReadStream(gzipFile);

    // Создаем поток для записи файла
    const writeStream = fs.createWriteStream(file);

    // Создаем поток для сжатия данных
    const gzip = zlib.createGunzip();

    // Перенаправляем данные из потока чтения в поток сжатия
    readStream.pipe(gzip)
        // Перенаправляем данные из потока сжатия в поток записи
        .pipe(writeStream)

        // Обрабатываем завершение записи сжатого файла
        .on('finish', () => {});
};

await decompress();
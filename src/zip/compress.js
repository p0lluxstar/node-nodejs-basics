import fs from 'fs';
import zlib from 'zlib';

const file = './src/zip/files/fileToCompress.txt';
const gzipFile = './src/zip/files/archive.gz'

const compress = async () => {
    // Создаем поток для чтения исходного файла
    const readStream = fs.createReadStream(file);

    // Создаем поток для записи сжатого файла
    const writeStream = fs.createWriteStream(gzipFile);

    // Создаем поток для сжатия данных
    const gzip = zlib.createGzip();

    // Перенаправляем данные из потока чтения в поток сжатия
    readStream.pipe(gzip)
        // Перенаправляем данные из потока сжатия в поток записи
        .pipe(writeStream)

        // Обрабатываем завершение записи сжатого файла
        .on('finish', () => {});
};

await compress();
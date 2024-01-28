import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {

    if (args === undefined) {
        args = [];
    }

    const childProcess = spawn('node', ['./src/cp/files/script.js', ...args]);

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    childProcess.stderr.on('data', (data) => {
        process.stderr.write(data);
    });

    process.stdin.pipe(childProcess.stdin);
};

spawnChildProcess();
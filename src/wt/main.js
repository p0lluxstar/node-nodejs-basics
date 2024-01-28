import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {

    const numCPU = os.cpus().length;
    let results = [];

    async function runWorkers() {
        for (let i = 0; i < numCPU; i++) {
            await new Promise((resolve, reject) => {
                const worker = new Worker('./src/wt/worker.js', { workerData: { startNumber: 10 + i } });

                worker.on('message', result => {
                    resolve(results.push({ status: 'resolved', data: result }))
                });

                worker.on('error', error => {
                    resolve(results.push({ status: 'error', data: null }));
                });
            });
        }
        console.log(results);
    }
    runWorkers();
};

await performCalculations();
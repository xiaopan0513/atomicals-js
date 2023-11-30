import cluster from 'node:cluster';
import os from 'os';

const cpus = os.cpus();

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running, cpus: ${cpus.length}`);

    // Fork workers
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork();
    }

    // 接收消息
    const messageHandler = (msg: { type: string; result: any }) => {
        if (msg.type === 'found') {
            console.log(`Worker found the result: ${JSON.stringify(msg.result)}`);

            // 关闭所有子进程
            for (const id in cluster.workers) {
                cluster.workers[id]?.kill();
            }

            process.exit();
        }
    };

    for (const id in cluster.workers) {
        cluster.workers[id]?.on('message', messageHandler);
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    import('./worker');
}

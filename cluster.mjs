import cluster from "cluster";
import os from "os";
import process from "process";
import http, { request } from "http";

if (cluster.isPrimary) {
    console.info(`Primary: ${process.pid}`);

    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.addListener("exit", (worker) => {
        console.info(`exit: ${worker.id}`);
        cluster.fork();
    })
}

if (cluster.isPrimary) {
    console.info(`Worker: ${process.pid}`);

    const server = http.createServer((request, response) => {
        response.write(`Worker - ${process.pid}`)
        response.end()
        process.exit();
    })

    server.listen(8080);
}
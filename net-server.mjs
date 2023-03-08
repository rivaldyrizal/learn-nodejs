import net from "net";

const server = net.createServer((client) => {
    console.info("client connected");

    client.addListener("data", (data) => {
        console.info(`recieve data ${data.toString()}`);
        client.write(`halo ${data.toString()} \r\n`); //tanpa \r\n dianggap belum siap dikirim
    });
});

server.listen(3000, "localhost");
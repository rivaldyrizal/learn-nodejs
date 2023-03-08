import net from "net";

const client = net.createConnection({
    port: 3000,
    host: "localhost"
})

client.addListener("data", (data) => {
    console.info(`recieve data from server: ${data}`);
})

setInterval(() => {
    client.write("Rivaldi\r\n");
    // client.write(`${process.argv[2]}`); // run: node net-client.mjs Akhsan
}, 2000)
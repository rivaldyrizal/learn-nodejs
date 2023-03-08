import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Rivaldi\n");
writer.write("Rizalul\n");
writer.write("Akhsan\n");

writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
    console.info(data.toString());
});
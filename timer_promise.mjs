import timers from "timers/promises";

// console.info(new Date());
// await timers.setTimeout(5000);
// console.info(new Date());


for await (const startTime of timers.setInterval(5000, "ignored")) {
    console.info(`Started time at ${new Date()}`);
}
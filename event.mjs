import EventEmitter from "events";

const emit = new EventEmitter;

emit.addListener("hello", (name) => {
    console.info(`hello ${name}`);
})

emit.addListener("hello", (name) => {
    console.info(`halo ${name}`);
})

emit.emit("hello", "ria");
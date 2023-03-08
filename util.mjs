import util from "util";

const name = "Rivaldi Rizalul Akhsan"
const fistName = "Rivaldi";
const lastName = "Akhsan";

console.info(name);
console.info(util.format("Nama: %s", name));
console.info(util.format("Nama: %s %s", fistName, lastName));

const person = {
    firstName: "Rivaldi",
    lastName: "Akhsan"
};

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person: %j", person));

import { URL } from "url";

const pzn = new URL("https://kavaldy.com/");

pzn.searchParams.append("status", "true")

console.info(pzn.toString());
console.info(pzn.host);
console.info(pzn.href);
console.info(pzn.searchParams);

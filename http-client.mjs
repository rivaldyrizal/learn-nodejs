import https from "https";

const endpoint = "https://640b067265d3a01f980dfe06.mockapi.io"

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(data.toString());
    })
});

const body = JSON.stringify({
    firstName: "Rivaldi",
    lastName: "Akhsan"
});

request.write(body);
request.end();
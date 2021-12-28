console.log("Hello world")

async function call() {
    const whoamiEndpoint = '/api/whoami';
    const response = await fetch(whoamiEndpoint)
    const json = await response.json()
    console.log(json)

    document.getElementById("code").innerText = `${json}`
}

call()
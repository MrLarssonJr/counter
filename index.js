const http_url = "https://eu-1.lolo.co/fc8EBt9pb2tWtiaRjqHBDZ";
const ws_url = "wss://eu-1.lolo.co/fc8EBt9pb2tWtiaRjqHBDZ";


const decrement = () => {
    fetch(`${http_url}/decrement`, {method: "POST"})
        .then((res) => {
            if (!res.ok) {
                throw new Error(`non ok response. status ${res.status}`);
            }
        })
        .catch((e) => console.log(e));
};

const increment = () => {
    fetch(`${http_url}/increment`, {method: "POST"})
        .then((res) => {
            if (!res.ok) {
                throw new Error(`non ok response. status ${res.status}`);
            }
        })
        .catch((e) => console.log(e));
};

const update_value = (val) => {
    const el = document.getElementById("value");
    el.innerText = val;
};

const socket = new WebSocket(`${ws_url}/socket`);

socket.onmessage = (event) => {
    update_value(event.data);
};

fetch(`${http_url}/value`)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`non ok response. status ${res.status}`);
        }

        return res.json();
    })
    .then(update_value);

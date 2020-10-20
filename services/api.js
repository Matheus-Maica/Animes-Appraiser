const axios = require("axios")

let host = "https://api.myanimelist.net/v2/"

const api = axios.create({
    baseURL: host,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    }
})

api.interceptors.request.use(async config => {
    config.headers.authorization = `Bearer token`

    return config;
})

module.exports = api;
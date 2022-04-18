const axios = require("axios")
const {BaseHref} = require('./const')


const axiosIns = axios.create({
    baseURL:BaseHref
})

module.exports = {
    axiosIns,
}
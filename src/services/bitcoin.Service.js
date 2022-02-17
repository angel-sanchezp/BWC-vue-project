import axios from 'axios'
// var axios = Axios.create({
//     withCredentials: true
// })

export default {
    getRate,
    getMarketPrice,

}

const STORAGE_KEY = 'BITCOINDB'
const KEY = 'MarketPrice'


async function getRate(coins) {
    console.log('coins bitcoin service',coins)
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    if (!data.length) {
        const { data } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        return data
    }
    return data

}

async function getMarketPrice() {
    let data = JSON.parse(localStorage.getItem(KEY)) || []
    if (!data.length) {
        const { data } = await axios.get("https://api.blockchain.info/charts/market-price?timespan=12months&format=json&cors=true")
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        return data
    }
    return data 
}


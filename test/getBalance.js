const { getBalance } = require('../src/api/getBalance')

async function test() {
    let result = await getBalance({
        "merchant": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
        "chain": "tron",
        "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
    })
    console.log(result)
}

test()

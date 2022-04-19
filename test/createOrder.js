const Cpay = require('../src/index')
async function test() {
    let publicKey = '0x2143d11B31b319C008F59c2D967eBF0E5ad2791d'
    let privateKey = 'f78494eb224f875d7e352a2b017304e11e6a3ce94af57b373ae82a73b3496cdd'
    const cpay = new Cpay(publicKey,privateKey)

    let info = {
        "out_order_no": Date.now()+'',
        "pay_chain": "tron",
        "pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
        "pay_amount": "1.23",
        "notify": "http://localhost"
    }
 
    let result = await cpay.createOrder(info)
    
    console.log(result)
}

test()

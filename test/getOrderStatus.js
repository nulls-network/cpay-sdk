const Cpay = require('../src/index')


async function test() {
    let publicKey = '0x2143d11B31b319C008F59c2D967eBF0E5ad2791d'
    let privateKey = 'f78494eb224f875d7e352a2b017304e11e6a3ce94af57b373ae82a73b3496cdd'
    const cpay = new Cpay(publicKey,privateKey)

    const uuid = 'b6687df7-27f5-4771-bdaf-7f532e749ed2'
    let result = await cpay.getOrderStatus(uuid)
    console.log(result)
}

test()

const {getOrderStatus} =  require('../src/api/getOrderStatus')

async function test() {
    const uuid = 'b6687df7-27f5-4771-bdaf-7f532e749ed2'
    let result = await getOrderStatus(uuid)
    console.log(result)
}

test()

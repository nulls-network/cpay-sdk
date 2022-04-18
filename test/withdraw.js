const { doWithdraw } = require('../src/api/withdraw')

async function test() {
    let result = await doWithdraw(
        {
            "to": "TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9",
            "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
            "amount": "2000",
            "fromChain": "tron",
            "toChain": "tron",
            "uuid": Date.now(),
            "from": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
        },
        'f78494eb224f875d7e352a2b017304e11e6a3ce94af57b373ae82a73b3496cdd'
    )
    console.log(result)
}

test()

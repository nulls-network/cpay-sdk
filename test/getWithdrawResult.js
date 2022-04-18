const {getWithdrawResult} =  require('../src/api/getWithdrawResult')

async function test() {
    const tsHash = '0xc373a0c1de3d876ea089112689b3aad290a587b4f5095a3b1cd1bbb1089e6373'
    let result = await getWithdrawResult(tsHash)
    console.log(result)
}

test()

const Cpay = require('../src/index')


async function test() {
    let publicKey = '0x2143d11B31b319C008F59c2D967eBF0E5ad2791d'
    let privateKey = 'f78494eb224f875d7e352a2b017304e11e6a3ce94af57b373ae82a73b3496cdd'
    const cpay = new Cpay(publicKey,privateKey)

    const tsHash = '0xc373a0c1de3d876ea089112689b3aad290a587b4f5095a3b1cd1bbb1089e6373'
    let result = await cpay.getWithdrawResult(tsHash)
    console.log(result)
}

test()

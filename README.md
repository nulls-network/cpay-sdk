## 安装
```
npm install @nulls-network/cpay-sdk
```

## 使用
```javascript
const Cpay = require('@nulls-network/cpay-sdk')

async function test(){
    let uuid = "282ec47e-fed4-47de-ac6c-b3c8e3ae20bd"
    let result = await Cpay.getOrderStatus(uuid)
    console.log(result)
}
test()
```

#### 更多使用方法请查看 /test 文件夹

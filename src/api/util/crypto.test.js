
import aes from 'crypto-js/aes'

test("公钥加密算法测试", function () {
    let cipher = null;

    cipher = aes.encrypt('message', 'dfdfd')
    console.log(cipher)
});
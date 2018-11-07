import {encryptPublicLong, decryptPrivateLong} from '@lsqswl/rsaencrypt'


let publicKeyBase64 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCT15LJLHFNQywfLtNJ54EdYDZgOcMu6QIXDw1VhXYI9maI3XuqN6vmrhjp0poWGN7yMmkYSHb+khi4BQcBAbP6EZxZjMvWHBTVgLz66leqn9EaLVMmddSUehw6g9Zb6YxCRqlbIisUjcD6HRWOM86K+qWQWmr0+17+uN+oxtAfLwIDAQAB";

test("RSA公钥加密算法测试", function () {
    let message = "743834110";

    let cipher = encryptPublicLong(message, publicKeyBase64);
    console.log(cipher)
});
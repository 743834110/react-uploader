import ImUtil from "./ImUtil";
import Message from "../bean/Message";


test("loginReqBody生成测试", function () {
    let loginReqBody = ImUtil.sendLoginReqPacket("743834110", "2217092039");
    let message = new Message();
});
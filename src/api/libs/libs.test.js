
import Observer from "./Observer";

class Test extends Observer {

    observer(state) {
        super.observer(state);
    }

    updateFilter(state) {
        return super.updateFilter(state);
    }
}
/**
 * 测试类的继承
 */
test("", function () {

    let test = new Test();
    console.log(test)
});
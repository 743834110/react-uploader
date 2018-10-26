import Message from "./Message";


test("", function () {
    let message = new Message(new Date().getTime(), 11, null, null);
    Object.assign(message, {
        id: 544545,
        extras: Object.assign({}, message)
    })
    console.log(message)
});
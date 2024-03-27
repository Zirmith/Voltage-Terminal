// helloworld.js
module.exports = {
    data: {
        name: "HelloWorld",
        description: "Prints 'Hello, World!'",
        usage: "helloworld",
        author: "Your Name",
        info: {
            version: "1.0",
            stable: true,
            experimental: false
        },
        action: function() {
            return "Hello, World!";
        }
    }
}

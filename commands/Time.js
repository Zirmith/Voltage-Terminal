// time.js

module.exports = {
    data: {
        name: "Time",
        description: "Displays the current time",
        usage: "time",
        author: "Your Name",
        info: {
            version: "1.0",
            stable: true,
            experimental: false
        },
        action: function() {
            // Get the current date and time
            const currentTime = new Date();
            const formattedTime = currentTime.toLocaleTimeString();

            // Display the current time
            return ('Current time:', formattedTime);
        }
    }
}

// time.js

module.exports = {
    data: {
        name: "Time",
        description: "Displays the current date, time, day of the week, and time zone",
        usage: "time",
        author: "AkiEa",
        info: {
            version: "2.0",
            stable: true,
            experimental: false
        },
        action: function() {
            // Get the current date and time
            const currentTime = new Date();
            const formattedDate = currentTime.toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const formattedTime = currentTime.toLocaleTimeString();
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            // Display the current date, time, day of the week, and time zone
            return `Current date: ${formattedDate}\nCurrent time: ${formattedTime}\nDay of the week: ${formattedDate.split(',')[0]}\nTime zone: ${timeZone}`;
        }
    }
}

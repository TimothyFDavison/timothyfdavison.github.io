document.addEventListener("DOMContentLoaded", function() {
        // Get the current date
        const today = new Date();

        // Format the date as "Month Year", e.g., "November 2024"
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = today.toLocaleDateString(undefined, options);

        // Insert the date into the timeline event
        document.getElementById("current-date").textContent = formattedDate;
});

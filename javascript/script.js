document.getElementById("greetingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("username").value;
    const messageBox = document.getElementById("messageBox");

    messageBox.textContent = `Welcome to the field, ${name}! Ready for kickoff?`;
});

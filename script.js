const students = {
    101: {room: "201", seat: "A12"},
    102: {room: "201", seat: "A13"},
    103: {room: "201", seat: "A14"},
    104: {room: "202", seat: "B15"},
    105: {room: "202", seat: "B16"},
    106: {room: "202", seat: "B17"},
    107: {room: "203", seat: "C18"},
    108: {room: "203", seat: "C19"},
    109: {room: "203", seat: "C20"},
    110: {room: "204", seat: "D01"},
};
const form = document.getElementById("seat-form");
form.addEventListener("submit", function(event) { 
    event.preventDefault();

    const rollNumber = document.getElementById("roll-number").value;
    const roll = Number(rollNumber);
    const student = students[roll];
    if (student) {
        const result = document.getElementById("result");
        result.innerHTML = `
        <h2>Seat Details</h2>
        <p>Roll Number: ${roll}</p>
        <p>Room Number: ${student.room}</p>
        <p>Seat Number: ${student.seat}</p>
        `;
    }
    else {
        const result = document.getElementById("result");
        result.innerHTML = "<p>Roll number not found.</p>";
    }
});
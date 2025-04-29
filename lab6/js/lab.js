// Transportation list
let myTransport = ["Porshe 911 Carerra", "Walking", "Bus", "Rides from friends"];

// Main Ride object
let myMainRide = {
  make: "Porshe",
  model: "911 Carerra",
  color: "green",
  year: 2020,
  age: function () {
    return 2025 - this.year;
  }
};

// Write to #output div
function outputToPage() {
  const outputEl = document.getElementById("output");

  outputEl.innerHTML += "Kinds of transportation I use: " + myTransport.join(", ") + "<br><br>";
  outputEl.innerHTML += "My Main Ride: <pre>" + JSON.stringify(myMainRide, null, 2) + "</pre>";
  outputEl.innerHTML += "Age of my car in 2025: " + myMainRide.age() + " years old.<br>";
}

// Call function when page loads
window.onload = outputToPage;

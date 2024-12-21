// profile.js
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve stored data
    const firstname = localStorage.getItem("firstname");
    const lastname = localStorage.getItem("lastname");
    const address = localStorage.getItem("address");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
  
    // Display data
    document.getElementById("firstname").textContent = firstname;
    document.getElementById("lastname").textContent = lastname;
    document.getElementById("address").textContent = address;
    document.getElementById("username").textContent = username;
    document.getElementById("email").textContent = email;
  });
  
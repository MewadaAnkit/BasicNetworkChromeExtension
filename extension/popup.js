document.addEventListener("DOMContentLoaded", () => {
    const fetchSpeedButton = document.getElementById("fetch-speed");
    const speedDisplay = document.getElementById("speed");
  
    async function fetchNetworkSpeed() {
      try {
        const response = await fetch("http://localhost:3000/api/network-speed");
        const data = await response.json();
        speedDisplay.textContent = `${data.speed} Mbps`;
      } catch (error) {
        speedDisplay.textContent = "Error fetching speed!";
        console.error(error);
      }
    }
  
    fetchSpeedButton.addEventListener("click", fetchNetworkSpeed);
  
    // Auto-fetch on load
    fetchNetworkSpeed();
  });
  
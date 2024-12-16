
function calculateNetworkSpeed() {
    const image = new Image();
    const startTime = Date.now();
    const imageSizeInBytes = 500000; // Approx 500 KB (for a test image)
    
    // Replace with a reliable test image URL (e.g., CDN)
    const imageUrl = `https://via.placeholder.com/1000x1000.png?${startTime}`;
    
    image.onload = () => {
      const endTime = Date.now();
      const durationInSeconds = (endTime - startTime) / 1000;
      const bitsLoaded = imageSizeInBytes * 8;
      const speedInMbps = (bitsLoaded / (durationInSeconds * 1024 * 1024)).toFixed(2);
      document.getElementById("speed").textContent = speedInMbps;
    };
  
    image.onerror = () => {
      document.getElementById("speed").textContent = "Error";
    };
  
    image.src = imageUrl;
  }
  
  document.getElementById("refresh").addEventListener("click", calculateNetworkSpeed);
  
  // Initial calculation on popup load
  calculateNetworkSpeed();
  
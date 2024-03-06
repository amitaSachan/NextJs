console.log("location file loaded")
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
  }
  
  function showPosition(position) {
   console.log("postion",position)
  }
  getLocation();
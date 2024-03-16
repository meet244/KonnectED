function updateConnection() {
    var connectionIcon = document.getElementById("connection-icon");
    var addConnectionBtn = document.getElementById("add-connection");

    // Check if the button is already connected
    if (addConnectionBtn.classList.contains("connected")) {
      // Update the icon to plus and remove connected class
      connectionIcon.classList.remove("fa-check");
      connectionIcon.classList.add("fa-plus");
      addConnectionBtn.classList.remove("connected");
    } else {
      // Update the icon to check and add connected class
      connectionIcon.classList.remove("fa-plus");
      connectionIcon.classList.add("fa-check");
      addConnectionBtn.classList.add("connected");
    }
}
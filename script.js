// Get the modal and its elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeButton = document.getElementsByClassName("close")[0];

// Get all images in the gallery
var images = document.querySelectorAll(".gallery-item img");

// Function to open the modal with zoomed-in image
function openModal(event) {
    modal.style.display = "block";
    modalImg.src = event.target.src;  // Set the modal image to the clicked image
}

// Add event listener to each image in the gallery
images.forEach(function(image) {
    image.addEventListener("click", openModal);
});

// Close the modal when the close button is clicked
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

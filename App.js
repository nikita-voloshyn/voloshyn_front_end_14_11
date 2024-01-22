document.addEventListener("DOMContentLoaded", function() {
    var imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

    var randomIndex = Math.floor(Math.random() * imageNames.length);

    var randomImagePath = "images/" + imageNames[randomIndex];

    var imgElement = document.getElementById("randomImage");
    imgElement.src = randomImagePath;
});

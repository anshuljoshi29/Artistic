document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll(".navbar a");

    // Loop through the navigation links and add a click event listener to each
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Remove the 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            
            // Add the 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

window.onscroll=() => {
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
}

document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll(".navbar a");

    // Loop through the navigation links and add a click event listener to each
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Remove the 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            
            // Add the 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}
function setActive(element) {
    let menuItems = document.querySelectorAll("#sidebar ul li");
    if (menuItems.length > 0) {
        menuItems.forEach(item => item.classList.remove("active"));
        element.classList.add("active");
    }
}

window.addEventListener("scroll", function () {
    let rightSection = document.querySelector("#aside");
    if (rightSection) {
        let position = rightSection.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight) {
            rightSection.style.opacity = "1";
            rightSection.style.transform = "translateY(0)";
        }
    }
});

window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (button) {
        if (document.documentElement.scrollTop > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

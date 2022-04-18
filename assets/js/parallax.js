window.addEventListener("scroll", function () {
    const distance = window.scrollY;
    document.getElementById("parallax-title").style.transform = `translateY(${distance * 1.2}px)`;
})
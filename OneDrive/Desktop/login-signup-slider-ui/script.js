document.addEventListener("DOMContentLoaded", function () {

    const slide = document.getElementById("slide");
    const topPanel = document.querySelector(".top");

    // Enable transitions
    slide.style.transition = "all 0.5s ease";
    topPanel.style.transition = "all 0.5s ease";

    // ✅ INITIAL STATE (LOGIN visible)
    slide.style.marginLeft = "50%";
    topPanel.style.marginLeft = "-100%";

    // SHOW SIGN UP
    document.getElementById("RightToLeft").addEventListener("click", function () {
        slide.style.marginLeft = "0";
        topPanel.style.marginLeft = "0";
    });

    // SHOW LOGIN
    document.getElementById("LeftToRight").addEventListener("click", function () {
        slide.style.marginLeft = "50%";
        topPanel.style.marginLeft = "-100%";
    });

});

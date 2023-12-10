function toggleNav() {
    var sideNav = document.getElementById("sideNav");
    var main = document.getElementById("main");
    var isOpen = sideNav.style.width === "250px";

    if (isOpen) {
        sideNav.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sideNav.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}
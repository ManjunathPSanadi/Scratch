document.getElementById("menu-toggle").addEventListener("click", function() {
    var drawer = document.getElementById("menu-drawer");
    var content = document.querySelector(".content");
    if (drawer.style.left === "-250px") {
        drawer.style.left = "0";
        content.style.marginLeft = "250px";
    } else {
        drawer.style.left = "-250px";
        content.style.marginLeft = "0";
    }
});

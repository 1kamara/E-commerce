const menuIcon = document.getElementById("menu-icon");
const menuNav = document.getElementById("menu");

menuIcon.addEventListener("click", ()=> {
    if (menuNav.className === "hidden") {
        menuNav.classList.remove("hidden");

    }else {
        menuNav.classList.add('hidden'); 

    }

})




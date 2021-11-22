const $listMenu = document.querySelector(".list-menu")
const $menuIcon = document.querySelector(".menu-icon")
const $closeIcon = document.querySelector(".closeIcon")

$closeIcon.addEventListener("click", () => {
    $listMenu.classList.remove("showMenu")
})

$menuIcon.addEventListener("click", () => {
    console.log("Waca se mama")
    $listMenu.classList.add("showMenu")
})

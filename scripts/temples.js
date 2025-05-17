const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = new Date(document.lastModified).toLocaleString();

const mainnav = document.querySelector(".navigation")
const hammenu = document.querySelector("#menu");

hammenu.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hammenu.classList.toggle("show");
});
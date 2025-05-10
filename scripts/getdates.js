const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = new Date(document.lastModified).toLocaleString();

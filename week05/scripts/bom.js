const list = document.querySelector("#list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete")
    li.appendChild(deleteButton);
    list.append(li);
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
    });
}



button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
})



function setChapterList() {
    localStorage.setItem("bomList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("bomList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});




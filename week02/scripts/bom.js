const list = document.querySelector("#list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");



button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        const span = document.createElement("span");
        const scripture = input.value.trim();


        input.value = "";
        li.textContent = scripture;
        deleteButton.textContent = "❌";
        span.textContent = input.value;

        input.focus();
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteButton);
        li.appendChild(span);
        list.appendChild(li);
    }
    else {
        alert("Please enter a valid scripture reference.");
    }
});
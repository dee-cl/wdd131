const list = document.querySelector("list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;
deleteButton.textContent = "❌";

li.appendChild(deleteButton);
list.appendChild(li);


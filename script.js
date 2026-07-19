let items = [
    "T-shirt",
    "Jeans",
    "Shoes",
    "Hat",
    "Jacket",
    "Hoodie",
    "Bag"
];

function searchItems() {
    let input = document.getElementById("search").value.toLowerCase();
    let result = document.getElementById("result");

    result.innerHTML = "";

    if (input === "") return;

    for (let i = 0; i < items.length; i++) {
        if (items[i].toLowerCase().includes(input)) {
            result.innerHTML += `<li class="list-group-item">${items[i]}</li>`;
        }
    }
}
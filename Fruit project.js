const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Durian",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Pineapple",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Watermelon"
];

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

searchInput.addEventListener("input", handleInput);

function handleInput() {
  const searchValue = searchInput.value.toLowerCase();
  const matchedFruits = fruits.filter(fruit =>
    fruit.toLowerCase().startsWith(searchValue)
  );

  renderSuggestions(matchedFruits);
}

function renderSuggestions(matchedFruits) {
  suggestionsList.innerHTML = "";

  matchedFruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    li.addEventListener("click", () => {
      searchInput.value = fruit;
      suggestionsList.innerHTML = "";
    });
    suggestionsList.appendChild(li);
  });
}

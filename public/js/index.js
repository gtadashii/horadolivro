function searchForBooks() {
  const searchBar = document.getElementById("search");
  const terms = searchBar.value;

  const body = {
    search_value: terms
  };

  fetch("http://localhost:3333/search", {
    method: "POST",
    body: JSON.stringify(body)
  }).then((response) => response.json()).then((data) => { console.log(data); });
}
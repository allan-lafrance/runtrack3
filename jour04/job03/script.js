function filterPokemon() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
  
    fetch("pokemon.json")
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(pokemon => {
          if (id && pokemon.id !== id) {
            return false;
          }
          if (name && !pokemon.name.toLowerCase().includes(name.toLowerCase())) {
            return false;
          }
          if (type && !pokemon.type.includes(type)) {
            return false;
          }
          return true;
        });
  
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";
  
        if (filteredData.length === 0) {
          resultsDiv.innerHTML = "Aucun résultat trouvé.";
        } else {
          filteredData.forEach(pokemon => {
            const pokemonDiv = document.createElement("div");
            pokemonDiv.textContent = `${pokemon.id}: ${pokemon.name} (${pokemon.type})`;
            resultsDiv.appendChild(pokemonDiv);
          });
        }
      })
      .catch(error => {
        console.error("Erreur lors du chargement du fichier JSON :", error);
      });
  }
  
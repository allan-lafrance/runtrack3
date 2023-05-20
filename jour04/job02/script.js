function jsonValueKey(jsonString, key) {
    const jsonObject = JSON.parse(jsonString);
  
    if (key in jsonObject) {
      return jsonObject[key];
    } else {
      return "Clef non trouvee";
    }
  }
  
  // Exemple d'utilisation
  const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
  }`;
  
  const key = "city";
  const value = jsonValueKey(jsonString, key);
  console.log(value);
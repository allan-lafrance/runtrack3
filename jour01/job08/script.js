function estPremier(nombre) {
  if (nombre <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      return false;
    }
  }

  return true;
}

function sommenombrespremiers(nombre1, nombre2) {
  if (estPremier(nombre1) && estPremier(nombre2)) {
    return nombre1 + nombre2;
  } else {
    return false;
  }
}

console.log(sommenombrespremiers(3, 5));
console.log(sommenombrespremiers(10, 7));
console.log(sommenombrespremiers(19, 23))
function tri(numbers, order) {
  if (order === "asc") {
    numbers.sort(function(a, b) {
      return a - b;
    });
  } else if (order === "desc") {
    numbers.sort(function(a, b) {
      return b - a;
    });
  } else {
    console.log("Veuillez définir le tri par 'asc' ou 'desc'.");
    return false;
  }
  return numbers;
}

let numbers = [22, 45, 1, 3, 7, 95, 105, 3584, 5, 9, 24];
console.log(tri(numbers, 'asc')); // desc
function jourtravaille(date) {
  const joursFeries = {
    "01-01": "Jour de l'an",
    "04-04": "Pâques",
    "05-01": "Fête du travail",
    "05-08": "Victoire 1945",
    "05-13": "Ascension",
    "05-24": "Pentecôte",
    "07-14": "Fête nationale",
    "08-15": "Assomption",
    "11-01": "Toussaint",
    "11-11": "Armistice",
    "12-25": "Noël",
  };

  const joursSemaine = [ "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi","Dimanche"];
  const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  const jour = date.getDate();
  const jourSemaineNom = joursSemaine[date.getDay()];
  const moisIndex = date.getMonth();
  const moisNom = mois[moisIndex];
  const annee = date.getFullYear();
  const jourFerie = joursFeries[`${("0" + (moisIndex + 1)).slice(-2)}-${("0" + jour).slice(-2)}`];

  if (jourFerie) {
    console.log(`Le ${jourSemaineNom} ${jour} ${moisNom} ${annee} est un jour férié (${jourFerie}).`);
  } else if (date.getDay() === 0 || date.getDay() === 6) {
    console.log(`Non, le ${jourSemaineNom} ${jour} ${moisNom} ${annee} est un week-end.`);
  } else {
    console.log(`Oui, le ${jourSemaineNom} ${jour} ${moisNom} ${annee} est un jour travaillé.`);
  }
}

jourtravaille(new Date(2023, 4, 1));
jourtravaille(new Date(2023, 9, 5))
jourtravaille(new Date(2024, 31, 12))
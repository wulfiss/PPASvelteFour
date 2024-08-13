import { readable } from 'svelte/store';

// List of names
const producersNames: string[] = [
  "Bianchi Dario",
  "Biasioli Hugo",
  "Braidot Hector y Hugo",
  "Bressan Daniel",
  "Bressan Gabriel",
  "Cainelli Edgardo David",
  "Cainelli Rene",
  "Cappeletti Juan y Julián",
  "Corgniali Rosalia",
  "Dolzani Adelqui y Miguel",
  "Level S.A.",
  "Locatelli Victor",
  "MANARIE SRL",
  "Massin Albino",
  "Moschen Antonio",
  "Moschen Maria Elena",
  "Muchut Juan José",
  "Nagi S.A. (Naveiro C)",
  "Nobile Hector",
  "Nobile Walter",
  "Orzan Jorge",
  "Peresón Darío Norberto",
  "Pividori Claudio",
  "Pividori Jose Luis",
  "Quarin Alberto",
  "Raffin Eduardo Silvio",
  "Regonat Mario y Juan",
  "Suc. de Lorenzon Abel",
  "Sucesión Scarpin Ruben",
  "TATANE S.A.",
  "Tortul Daniel",
  "Tortul-Masat-Vicentin",
  "W y M Zupel",
  "Zilli Edgardo"
];

// Create a readonly store with the list of names
export const nameStore = readable(producersNames);

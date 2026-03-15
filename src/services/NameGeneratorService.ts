import { v4 as uuid } from "uuid";

const suffixes = [
 "ify",
 "hub",
 "lab",
 "core",
 "nova",
 "flow",
 "works",
 "stack",
 "base"
];

export function generateStartupNames(words: string[], amount = 10) {

 const names: { id: string; name: string }[] = [];

 for (let i = 0; i < amount; i++) {

  const word =
   words[Math.floor(Math.random() * words.length)];

  const suffix =
   suffixes[Math.floor(Math.random() * suffixes.length)];

  const name =
   capitalize(word) + capitalize(suffix);

  names.push({
   id: uuid(),
   name
  });

 }

 return names;
}

function capitalize(word: string) {
 return word.charAt(0).toUpperCase() + word.slice(1);
}
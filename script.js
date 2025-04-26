"use strict";

// filter

const names = ["Anna", "Ehor", "Maksym", "Valentin", "Olha"];

const shortNames = names.filter(function (name) {
  return name.length < 5;
});

console.log(shortNames);

// map

const answers = ["MAKsyM", "OLha", "anNA", "EhOR"];

const result = answers.map((item) => item.toLowerCase());

console.log(result);

// every/some

const array = [5, "Hello", "Hi", "Golden"];

console.log(array.some((item) => typeof item === "number"));

console.log(array.every((item) => typeof item === "number"));

// reduce

const arr = [1, 3, 5, 7, 12, 15, 6];

const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const arr2 = ["apple", "orange", "tomato", "peach", "chery"];

const res2 = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);

const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

const newArray = Object.entries(obj)
  .filter((item) => item[1] === "persone")
  .map((item) => item[0]);

console.log(newArray);


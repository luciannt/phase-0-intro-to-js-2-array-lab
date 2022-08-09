// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  return destructivelyAppendCat;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return destructivelyPrependCat;
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
  return destructivelyRemoveLastCat;
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
  return destructivelyRemoveFirstCat;
}

function appendCat(name) {
  const newCatsAppend = [...cats, name];
  return newCatsAppend;
}

function prependCat(name) {
  const newCatsPrepend = [name, ...cats];
  return newCatsPrepend;
}

function removeLastCat() {
  const catsSliceEnd = cats.slice(0, -1);
  return catsSliceEnd;
}

function removeFirstCat() {
  const catsSliceBeginning = cats.slice(1);
  return catsSliceBeginning;
}

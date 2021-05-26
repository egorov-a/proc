import { buildObjectFromStr } from "../functions/functions";

export function Container() {
  this.arr = [];
}

export function containerClear(container) {
  container.arr = [];
}

export function containerMultimethod(array, file, writeStrFromFile) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      switch (array[i].className) {
        case "Fish":
          switch (array[j].className) {
            case "Fish":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Fish - Fish");
              break;
            case "Bird":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Fish - Bird");
              break;
          }
          break;
        case "Bird":
          switch (array[j].className) {
            case "Fish":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Bird - Fish");
              break;
            case "Bird":
              writeStrFromFile(file, buildObjectFromStr(array[i]));
              writeStrFromFile(file, buildObjectFromStr(array[j]));
              writeStrFromFile(file, "Bird - Bird");
              break;
          }
          break;
      }
    }
  }
}

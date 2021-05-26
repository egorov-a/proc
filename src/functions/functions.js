import { Fish } from "../fish/Fish";
import { Bird } from "../bird/Bird";
import { Beast } from "../beast/Beast";

export function switchedObject(array, container) {
  let fish = null;
  let bird = null;
  let beast = null;

  array.forEach((element) => {
    let params = {
      id: element[0],
      value: element[1],
      name: element[2],
      age: element[3],
    };

    switch (params.id) {
      case "1":
        let fishParams = {
          id: params.id,
          location: params.value,
          name: params.name,
          age: params.age,
        };
        fish = new Fish(fishParams);
        container.arr.push(fish);
        break;
      case "2":
        const birdParams = {
          id: params.id,
          flight: params.value,
          name: params.name,
          age: params.age,
        };
        bird = new Bird(birdParams);
        container.arr.push(bird);
        break;
      case "3":
        const beastParams = {
          id: params.id,
          type: params.value,
          name: params.name,
          age: params.age,
        };
        beast = new Beast(beastParams);
        container.arr.push(beast);
        break;
      default:
        break;
    }
  });
}

export function correctFile(data) {
  return data.map((element) => {
    return element.replace("\r", "");
  });
}

export function buildObjectFromStr(obj) {
  let str = "";
  Object.keys(obj).forEach((key) => {
    str += `${key}: ${obj[key]} `;
  });

  return str;
}

export function numberLetters(name) {
  return name.length;
}

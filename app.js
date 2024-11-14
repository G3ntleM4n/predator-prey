const solve_k = (V, P) => {
  let a = 0.3;
  let b = 0.28;
  let c = 0.7;
  let d = 0.3;
  const array = [];

  array.push(
    (a - b * P) * V,      // Preys
    (-c + d * V) * P     // Predators
  );
  return array;   // [Prey, Predator]
}

const rungeKutta = () => {
  const dataCount = 10;
  const step = 1 / dataCount;

  const k1 = [];
  const k2 = [];
  const k3 = [];
  const k4 = [];
  const delta = [];
  const t = [0];
  const data = [[5, 10, t[0]]];

  for (let i = 0; i < dataCount; i += 1) {
    k1.push(solve_k(
      data[i][0],
      data[i][1],
    ));

    k2.push(solve_k(
      data[i][0] + (step * k1[i][0] / 2),
      data[i][1] + (step * k1[i][1] / 2),
    ));

    k3.push(solve_k(
      data[i][0] + (step * k2[i][0] / 2),
      data[i][1] + (step * k2[i][1] / 2),
    ));

    k4.push(solve_k(
      data[i][0] + (step * k3[i][0]),
      data[i][1] + (step * k3[i][1]),
    ));

    delta.push([
      (step / 6) * (k1[i][0] + 2 * k2[i][0] + 2 * k3[i][0] + k4[i][0]),
      (step / 6) * (k1[i][1] + 2 * k2[i][1] + 2 * k3[i][1] + k4[i][1]),
    ]);

    t.push(t[i] + step);

    data.push([
      data[i][0] + delta[i][0],
      data[i][1] + delta[i][1],
      t[i],
    ]);
  }

  return data;
}

const data = rungeKutta();

/*
const data_prey = [];
const data_predator = [];
const time = [];

for (let i = 0; i < data.length; i += 1) {
  data_prey.push(data[i][0]);
  data_predator.push(data[i][1]);
  time.push(data[i][2]);
};
*/

//console.log(data_prey);
//console.log(data_predator);
//console.log(time);

/* const elements = [0, 100];
let dataCount = 10;
let step = dataCount / elements[1];
console.log(step);
let a = 0.3;
let b = 0.5;
let c = 0.4;
let d = 0.7;

const data = [[5, 10]];
const delta_Y = [];
const k1 = [];
const k2 = [];
const k3 = [];
const k4 = [];
const t = [0];

const solve_k = (x, y) => {
  const array = [];
  array.push(
    (a * Math.pow(x, 2) - b * Math.pow(x, 2) * y) / 2,
    (-c * Math.pow(y, 2) + d * x * Math.pow(y, 2)) / 2,
  );
  console.log(array)
  return array;
}

for (let i = 0; i < 2; i += 1) {
  console.log(i);

  k1.push(solve_k(
    data[i][0],
    data[i][1],
  ));
  console.log(k1);

  k2.push(solve_k(
    data[i][0] + (step * k1[i][0] / 2),
    data[i][1] + (step * k1[i][1] / 2),
  ));
  console.log(k2);

  k3.push(solve_k(
    data[i][0] + (step * k2[i][0] / 2),
    data[i][1] + (step * k2[i][1] / 2),
  ));
  console.log(k3);

  k4.push(solve_k(
    data[i][0] + (step * k2[i][0]),
    data[i][1] + (step * k2[i][1]),
  ));
  console.log(k4);

  delta_Y.push([
    (step / 6) * (k1[i][0] + 2 * k2[i][0] + 2 * k3[i][0] + k4[i][0]),
    (step / 6) * (k1[i][1] + 2 * k2[i][1] + 2 * k3[i][1] + k4[i][1]),
  ]);
  console.log(delta_Y);

  data.push([
    data[i][0] + delta_Y[i][0],
    data[i][1] + delta_Y[i][1],
  ]);
  console.log(data)

  t.push(t[i] + step);
  console.log(t);
}

for (let i = 0; i < 2; i += 1) {
  console.log(i);

  k1.push([
    a - b * data[i][0],
    -c + d * data[i][1]
  ]);
  console.log(k1);

  k2.push([
    a - b * (data[i][0] + (step * k1[i][0] / 2)),
    -c + d * (data[i][1] + (step * k1[i][1] / 2)),
  ]);
  console.log(k2);

  k3.push([
    a - b * (data[i][0] + (step * k2[i][0] / 2)),
    -c + d * (data[i][1] + (step * k2[i][1] / 2)),
  ]);
  console.log(k3);

  k4.push([
    a - b * (data[i][0] + (step * k2[i][0])),
    -c + d * (data[i][1] + (step * k2[i][1])),
  ]);
  console.log(k4);

  delta_Y.push([
    (step / 6) * (k1[i][0] + 2 * k2[i][0] + 2 * k3[i][0] + k4[i][0]),
    (step / 6) * (k1[i][1] + 2 * k2[i][1] + 2 * k3[i][1] + k4[i][1]),
  ]);
  delta_Y[i].push();
  console.log(delta_Y);

  data.push([
    data[i][0] + delta_Y[i][0],
    data[i][1] + delta_Y[i][1],
  ]);
  console.log(data)

  t.push(t[i] + step);
  console.log(t);

}; */
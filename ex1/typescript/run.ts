import fs from 'fs';
import { computeCost } from './computeCost';
import { featureNormalize } from './featureNormalize';
import { gradientDescent } from './gradientDescent';

const buffer = fs.readFileSync('ex1data2.txt','utf8');

const data = buffer.split("\n")
    .filter(s => !!s)
    .map(r => r.split(',').map(v => +v));

const X: number[][] = featureNormalize(data.map(val => [1, ...val.slice(0,val.length-1)]));
// const X: number[][] = data.map(val => [1, ...val.slice(0, val.length - 1)]);
const y: number[] = data.map(val => val[val.length-1]);

// console.log({X,y})

const theta = X[0].map(v => 0);
// const theta1 = [-1, 2];
const iterations = 400;
const alpha = 0.1;

const cost = computeCost(X, y, theta);
// console.table(y);
console.log({ cost })

const [finalTheta, jHistory] = gradientDescent(X, y, theta, alpha, iterations);
// console.table(jHistory)
console.table(finalTheta);
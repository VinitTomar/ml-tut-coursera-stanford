import { hypothesis } from "./hypothesis";

export function computeCost(X: number[][], y: number[], theta: number[]):number {
    const m = X.length;

    let sum = 0;

    for (let i = 0; i < m; i++) {
        const h = hypothesis(theta, X[i]);
        const diffSqr = Math.pow(h - y[i], 2);
        sum += diffSqr;
    }

    return sum / (2 * m);
}
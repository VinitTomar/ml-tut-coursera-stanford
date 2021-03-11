import { computeCost } from "./computeCost";
import { hypothesis } from "./hypothesis";

export function gradientDescent(X: number[][], y: number[], theta: number[], alpha: number, iterations: number): [number [], number[]] {
    // console.table(X)
    
    let cTheta = [...theta];
    const m = X.length;
    const jHistory: number[] = [];

    for (let k = 0; k < iterations; k++) {
        const tempTheta = [...cTheta];

        for (let j = 0; j < cTheta.length; j++) {
            let sum = 0;

            for (let i = 0; i < m; i++) {
                const h = hypothesis(cTheta, X[i]);
                const diff = h - y[i];
                const mul = diff * X[i][j];
                sum += mul;
            }

            const grad = (alpha / m) * sum;   
            tempTheta[j] -= grad;
        }

        cTheta = [...tempTheta];

        // if(k > -1 && k < 10)
        //     console.table(cTheta);


        jHistory.push(computeCost(X, y, cTheta));
    }

    // console.table(jHistory)

    return [cTheta, jHistory];
}
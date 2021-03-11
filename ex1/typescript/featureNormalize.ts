import { mean as mn, standardDeviation } from 'simple-statistics';

export function meanStd(xT: number[][]): [number[], number[]] {
    const rows = xT.length;
    const mean = new Array<number>(xT[0].length).fill(0);
    const std = new Array<number>(xT[0].length).fill(0);

    for (let i = 0; i < rows; i++) {
        const elm = xT[i];

        for (let j = 0; j < elm.length; j++) {
            mean[j] += elm[j];
        }

    }
    
    for (let j = 0; j < mean.length; j++) {
        mean[j] /= rows;
    }
    
    for (let i = 0; i < rows; i++) {
        const elm = xT[i];

        for (let j = 0; j < elm.length; j++) {
            const diff = mean[j] - elm[j];
            std[j] += Math.pow(diff, 2);
        }

    }

    
    for (let j = 0; j < std.length; j++) {
        std[j] /= rows;
        std[j] = Math.sqrt(std[j]);
    }

    return [mean, std];
}

function transpose(x: number[][]): number[][] {
    const rows = x.length;
    const cols = x[0].length;

    let r: number[][] = new Array(cols);

    for (let i = 0; i < cols; i++) {
        r[i] = new Array(rows);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            r[j][i] = x[i][j];
        }
    }

    return r;
}

export function featureNormalize(X: number[][]): number[][] {

    const xc = [...X.map(v => [...v.slice(1, v.length)])];
    // const [mean, std] = meanStd(xc);

    // const xt = transpose(xc);
    // const mean: number[] = [];
    // const std: number[] = [];

    // mean: [ 2000.6808510638298, 3.1702127659574466 ],
    // std: [ 786.2026187430467, 0.7528428090618782 ]

    // for (let i = 0; i < xt.length; i++) {
    //     mean.push(mn(xt[i]));
    //     std.push(standardDeviation(xt[i]));
    // }

    const [mean, std] = meanStd(xc);
    // const [mean, std] = [[2.0007e+03, 3.1702e+00],[794.7024, 0.7610]];

    // console.log({mean, std})
    
    for (let i = 0; i < xc.length; i++) {

        for (let j = 0; j < xc[i].length; j++) {
            xc[i][j] = (xc[i][j] - mean[j]) / std[j];
        }

    }

    // console.table(xc);

    return xc.map(val => [1, ...val.slice(0,val.length)]);;
}
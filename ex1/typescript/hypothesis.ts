export function hypothesis(theta: number[], X: number[]): number {
    let result = 0;

    for (let i = 0; i < X.length; i++) {
        const elm = X[i];
        const t = theta[i];

        result += elm * t;
    }

    return result;
}
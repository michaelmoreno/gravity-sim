function randomRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

function randomChoice(arr: any[]): any {
    return arr[Math.floor(Math.random() * arr.length)];
}

export {
    randomRange, 
    randomChoice 
};
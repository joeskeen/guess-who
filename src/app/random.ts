export class Random {
  private seed = 0;
  constructor(seed: string) {
    this.seed = seed
      .split('')
      .reduce((prev, curr) => prev + curr.charCodeAt(0), 0);
  }

  next(): number {
    this.seed = Math.sin(this.seed) * 10000;
    return this.seed - Math.floor(this.seed);
  }
}

export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    const result = price - price * this.discount;
    return Number(result.toFixed(2));
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  calculate(price: number): number {
    const result = price - price * this.discount;
    return Number(result.toFixed(2));
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}

// Caso eu altere o comportamento padrão da classe Pai em alguma SubClasse, eu quebrei o princípio

export abstract class Discount {
  protected discount = 0;

  // calculate(price: number): number {
  //   const result = price - price * this.discount;
  //   return Number(result.toFixed(2));
  // }

  calculate(price: number): unknown {
    return 20;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;

  // ❌ Aqui foi quebrado o comportamento padrão
  calculate(price: number): string {
    return '';
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;

  // ❌ Aqui foi quebrado o comportamento padrão
  calculate(price: number): boolean {
    return !!'';
  }
}

export class NoDiscount extends Discount {
  // ❌ Aqui foi quebrado, de uma maneira sutil, o comportamento padrão
  calculate(price: number): number {
    return price;
  }
}

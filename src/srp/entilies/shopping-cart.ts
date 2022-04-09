import { CartItem } from './interfaces/card-item';

export class ShoppingCart {
  private readonly _itens: CartItem[] = [];

  addItem(item: CartItem): void {
    this._itens.push(item);
  }

  removeItem(index: number): void {
    this._itens.splice(index, 1);
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._itens.length = 0;
  }

  get total(): number {
    return Number(
      this._itens.reduce((acc, valor) => acc + valor.price, 0).toFixed(2),
    );
  }

  get itens(): Readonly<CartItem[]> {
    return this._itens;
  }
}

interface CartItem {
  name: string;
  price: number;
}

type OrderStatus = 'Open' | 'Closed';

class ShoppingCart {
  private readonly _itens: CartItem[] = [];
  private _orderStatus: OrderStatus = 'Open';

  addItem(item: CartItem): void {
    this._itens.push(item);
  }

  removeItem(index: number): void {
    this._itens.splice(index, 1);
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.sendMessage('Seu pedido está sendo processado...');
    this.saveOrder();
    this.clear();
  }

  saveOrder(): void {
    console.log('Seu pedido foi salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._itens.length = 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  get total(): number {
    return Number(
      this._itens.reduce((acc, valor) => acc + valor.price, 0).toFixed(2),
    );
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  get itens(): Readonly<CartItem[]> {
    return this._itens;
  }
}

const meuCarrinho = new ShoppingCart();
meuCarrinho.addItem({ name: 'Camisa', price: 39.99 });
meuCarrinho.addItem({ name: 'Calça', price: 45.99 });
meuCarrinho.addItem({ name: 'Cassaco', price: 69.99 });
console.log(meuCarrinho.total);
meuCarrinho.checkout();
console.log(meuCarrinho.itens);

export default 1;

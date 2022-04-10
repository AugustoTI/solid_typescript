import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  constructor(
    private cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.messaging.sendMessage(
      `Seu pedido está sendo processado com valor de ${this.cart.totalWidthDiscount()}...`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

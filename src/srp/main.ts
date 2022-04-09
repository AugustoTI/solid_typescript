import { Messaging } from './services/messaging';
import { Order } from './entilies/order';
import { Persistency } from './services/persistency';
import { Product } from './entilies/product';
import { ShoppingCart } from './entilies/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camisa', 29.99));
shoppingCart.addItem(new Product('Calça', 35.99));
shoppingCart.addItem(new Product('Cassaco', 59.99));

console.log(shoppingCart.itens);
console.log(shoppingCart.total);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

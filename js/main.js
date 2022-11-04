import Order from './models/order.js';
import * as orderService from './services/order-service.js';

const data = document.getElementById("orderInput").innerHTML.split("\n");

const order1 = new Order(data[0], Number(data[1]), Number(data[2]));
const order2 = new Order(data[3], Number(data[4]), Number(data[5]));
const order3 = new Order(data[6], Number(data[7]), Number(data[8]));

console.log("------ EXEMPLO 1 --------");
console.log("Pedido código " + order1.code);
console.log("Valor total : R$" + orderService.total(order1).toFixed(2));

console.log("------ EXEMPLO 2 --------");
console.log("Pedido código " + order2.code);
console.log("Valor total : R$" + orderService.total(order2).toFixed(2));

console.log("------ EXEMPLO 3 --------");
console.log("Pedido código " + order3.code);
console.log("Valor total : R$" + orderService.total(order3).toFixed(2));

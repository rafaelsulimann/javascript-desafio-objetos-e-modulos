import * as shipmentService from './shipping-service.js';

export function total(order){
    const basic = order.basic;
    const shipment = shipmentService.shipment(order);
    const discount = basic * (order.discount / 100);

    return basic - discount + shipment;

}
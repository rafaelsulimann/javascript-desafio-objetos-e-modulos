export function shipment(order){
    const value = order.basic;

    if(value < 100.0){
        return 20.0;
    }else if(value < 200.0){
        return 12.0;
    }else{
        return 0.0;
    }
}
export default {

	orderStatusOptions: [
		
  {
    "label": "Order Placed",
    "value": "ORDER PLACED"
  },
  {
    "label": "Delayed",
    "value": "DELAYED"
  },
  {
    "label": "Delivered",
    "value": "DELIVERED"
  },
  {
    "label": "Refunded",
    "value": "REFUNDED"
  }
],

	addOrder: async () => {
		const orderId = this.generateRandomID();
		await add_order.run({id : orderId});
		await add_product.run({id : orderId});
		await fetch_orders.run();
		await resetWidget('add_modal');
		return closeModal('add_modal');
	},
	generateRandomID: () =>{
		return '_' + Math.random().toString(36).substr(2,9)
		
	}
}
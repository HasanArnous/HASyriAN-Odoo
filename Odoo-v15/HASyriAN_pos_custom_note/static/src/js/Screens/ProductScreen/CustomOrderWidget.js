odoo.define('HASyriAN_pos.CustomOrderWidget', function(require) {
    'use strict';

    const OrderWidget = require('point_of_sale.OrderWidget');
    const Registries = require('point_of_sale.Registries');

    const CustomOrderWidget = (OrderWidget) => class extends OrderWidget {
        mounted() {
            super.mounted();
            this.renderCustomNote();
            // Listen to the noteChange event that the CustomNoteButton will trigger whenever it Confirmed!
            this.env.pos.get_order().on('noteChanged', this.renderCustomNote, this);
        }

        renderCustomNote() {
            const order = this.env.pos.get_order();
			const order_container = document.getElementsByClassName('order');
			if(order_container){
				const container = order_container[0];
				if (container) {
					let noteElement = container.previousElementSibling;
					if (!noteElement || !noteElement.classList.contains('order-widget-custom-note')) {
						noteElement = document.createElement('div');
						noteElement.className = 'order-widget-custom-note';
						container.insertAdjacentElement('beforebegin', noteElement);
					}
					if(order.custom_note === undefined || order.custom_note === ''){
						noteElement.remove();
					}
					else{
						noteElement.textContent = order.custom_note || '';
					}
				}				
			}
        }
    };

    Registries.Component.extend(OrderWidget, CustomOrderWidget);
    return CustomOrderWidget;
});

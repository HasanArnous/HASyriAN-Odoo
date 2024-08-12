odoo.define('HASyriAN_pos.CustomTicketScreen', function(require) {
    'use strict';

    const TicketScreen = require('point_of_sale.TicketScreen');
    const Registries = require('point_of_sale.Registries');

    const CustomTicketScreen = (TicketScreen) => class extends TicketScreen {
        get orders() {
            const orders = super.orders;
            orders.forEach(order => {
                order.custom_note = order.custom_note || '';
            });
            return orders;
        }
    };

    Registries.Component.extend(TicketScreen, CustomTicketScreen);

    return CustomTicketScreen;
});
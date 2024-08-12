odoo.define('HASyriAN_pos.models', function(require) {
    'use strict';

    const models = require('point_of_sale.models');
    let Order = models.Order;

    const _super_Order = Order.prototype;
    Order = Order.extend({
        initialize: function(attr, options) {
            _super_Order.initialize.call(this, attr, options);
            this.custom_note = this.custom_note || '';
        },

        export_as_JSON: function() {
            const json = _super_Order.export_as_JSON.call(this);
            json.custom_note = this.custom_note;
            return json;
        },

        init_from_JSON: function(json) {
            _super_Order.init_from_JSON.call(this, json);
            this.custom_note = json.custom_note;
        },
        export_for_printing: function() {
            const receipt = _super_Order.export_for_printing.apply(this, arguments);
            receipt.custom_note = this.custom_note;
            return receipt;
        },
    });

    models.Order = Order;
});
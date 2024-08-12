odoo.define('HASyriAN_pos.CustomProductScreen', function(require) {
    'use strict';

    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');
    const CustomNoteButton = require('HASyriAN_pos.CustomNoteButton');

     const CustomProductScreen = (ProductScreen) => class extends ProductScreen {
        constructor() {
            super(...arguments);
        }

        get controlButtons() {
            return [
                ...super.controlButtons,
                {
                    component: CustomNoteButton,
                    condition: () => true,
                },
            ];
        }
    }

    Registries.Component.extend(ProductScreen, CustomProductScreen);
    return CustomProductScreen;
});
odoo.define('HASyriAN_pos.CustomNoteButton', function(require) {
    'use strict';

    
    const PosComponent = require('point_of_sale.PosComponent');
    const { useListener } = require('web.custom_hooks');
    const Registries = require('point_of_sale.Registries');

    class CustomNoteButton extends PosComponent {
        constructor() {
            super(...arguments);
            useListener('click', this.onClick);
        }
        async onClick() {
            const order = this.env.pos.get_order();
            if (!order) return;

            const { confirmed, payload: inputNote } = await this.showPopup('TextAreaPopup', {
                startingValue: order.custom_note || '',
                title: this.env._t('Add Custom Note'),
            });

            if (confirmed) {
                order.custom_note = inputNote;
                // Trigger a noteChange event to re-render the Note 
                // The CustomOrderWidget will listen to this event and re-render the order with the custom note)
                order.trigger('noteChanged', order); 
            }
        }
    }
    CustomNoteButton.template = 'CustomNoteButton';
    Registries.Component.add(CustomNoteButton);
    return CustomNoteButton;
});
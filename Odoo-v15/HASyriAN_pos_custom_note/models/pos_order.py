from odoo import models, fields, api, _

class PosOrder(models.Model):
    _inherit = 'pos.order'

    custom_note = fields.Text(string=_('Custom Note'), help="Custom Note for the Order")

    # TO Update the model and add the custom_note
    # This method is called from the POS client end to updated the model.
    @api.model
    def _order_fields(self, ui_order):
        order_fields = super(PosOrder, self)._order_fields(ui_order)
        order_fields['custom_note'] = ui_order.get('custom_note', False)
        return order_fields
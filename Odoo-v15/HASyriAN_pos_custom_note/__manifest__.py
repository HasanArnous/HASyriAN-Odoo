# -*- coding: utf-8 -*-
{
    'name': 'HASyriAN - Point of Sale - Custom Note',
    'author': 'HASyriAN',
    'category': 'Accounting/Point of Sale',
    'description': """
Adding Custom Note to the POS Order which will be stored in the database, and will be included in the receipt as well.

| Hasan Arnous | ®HASyriAN | GitHub.com/HasanArnous |

=======================================================
    """,
    'license': 'LGPL-3',
    'depends': ['point_of_sale', 'pos_restaurant'],
    'data':[
        "security/ir.model.access.csv",
        'views/HASyriAN_pos_custom_note.view_pos_order_tree.xml',
        'views/HASyriAN_pos_custom_note.view_pos_pos_form.xml',
        'views/HASyriAN_pos_custom_note.view_pos_order_filter.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            'HASyriAN_pos_custom_note/static/src/js/models.js',
            'HASyriAN_pos_custom_note/static/src/css/HASyriANOrderReceipt.css',
            'HASyriAN_pos_custom_note/static/src/js/Screens/ProductScreen/CustomProductScreen.js',
            'HASyriAN_pos_custom_note/static/src/js/Screens/ProductScreen/ControlButtons/CustomNoteButton.js',
            'HASyriAN_pos_custom_note/static/src/js/Screens/ProductScreen/CustomOrderWidget.js',
            'HASyriAN_pos_custom_note/static/src/js/Screens/TicketScreen/CustomTicketScreen.js',
        ],
        'web.assets_qweb': [
            'HASyriAN_pos_custom_note/static/src/xml/OrderReceipt.xml',
            'HASyriAN_pos_custom_note/static/src/xml/Screens/ProductScreen/ControlButtons/CustomNoteButton.xml',
            'HASyriAN_pos_custom_note/static/src/xml/Screens/ProductScreen/CustomOrderWidget.xml',
            'HASyriAN_pos_custom_note/static/src/xml/Screens/TicketScreen/CustomTicketScreen.xml',
        ],
    },
    'auto_install': False,
}

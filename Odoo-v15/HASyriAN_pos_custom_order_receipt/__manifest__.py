# -*- coding: utf-8 -*-
{
    'name': 'HASyriAN - Point of Sale - Custom Order Receipt',
    'author': 'HASyriAN',
    'category': 'Accounting/Point of Sale',
    'description': """
Customizing the Order Receipt as per Saudi Arabia Simplified Tax Invoice requirements. 

| Hasan Arnous | ®HASyriAN | GitHub.com/HasanArnous |

=======================================================
    """,
    'license': 'LGPL-3',
    'depends': ['point_of_sale', 'l10n_gcc_pos', 'l10n_sa_pos'],
    'assets': {
        'point_of_sale.assets': [
            'HASyriAN_pos_custom_order_receipt/static/src/css/HASyriANOrderReceipt.css',
        ],
        'web.assets_qweb': [
            'HASyriAN_pos_custom_order_receipt/static/src/xml/OrderReceipt_gcc.xml',
            'HASyriAN_pos_custom_order_receipt/static/src/xml/OrderReceipt.xml',
        ],
    },
    'auto_install': False,
}

define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'qppayment',
                component: 'Qisst_Oneclick/js/view/payment/method-renderer/qppayment-method'
            }
        );
        return Component.extend({});
    }
);
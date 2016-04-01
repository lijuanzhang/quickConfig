/**
 * Created by Administrator on 2016/3/14.
 */
Ext.define('QuickConfig.store.offerspec.OfferType', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.offerType',
    model: 'QuickConfig.model.offerspec.OfferType',
    data: [
        [0,  '主套餐',                                    ,0],
        [1,  '可选包',                                   1],
        [2,  '促销',                            2]
    ]
});

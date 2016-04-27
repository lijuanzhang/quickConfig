/**
 * Created by Administrator on 2016/4/26.
 */
Ext.define('QuickConfig.store.offerspec.OfferAndTemplate', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.offerAndTemplate',
    storeId:'testTemplate',
    model: 'QuickConfig.model.offerspec.FavouriteOffer',
    data: [
        [0,  '模板1',                                       71.72, 12,  '9/1 12:00am', '销售品1'],
        [1,  '模板2',                                   29.01, 23,  '9/1 12:00am', '销售品2'],

    ]
});

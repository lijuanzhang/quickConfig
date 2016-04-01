/**
 * Created by Administrator on 2016/3/23.
 */
Ext.define('QuickConfig.store.offerspec.OfferPages', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.offerPages',
    model: 'QuickConfig.model.offerspec.OfferPage',

    data: [['1','add', '', '1'], ['2','offerConf', 'confCheck', '1'],//1:商品新增
        ['21','modify', '22', '2',  'offerspec.Modify','offer-modify'],
        ['22','chooseToM', '23', '2','offerspec.chooseToModify','offer-chooseToModify'],
        ['23','batchMod', 'modCheck', '2'], ['24','modCheck', '', '2']]//2：商品修改
})
/**
* Created by Administrator on 2016/3/24.
*/
Ext.define('QuickConfig.model.tree.OfferAbbr', {
    extend: 'QuickConfig.model.tree.Base',
    entityName: 'OfferAbbr',
    idProperty: 'name',
    fields: [{
        name: "name",
        convert: undefined
    }]
});
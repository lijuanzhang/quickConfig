/**
 * Created by Administrator on 2016/4/11.
 */
Ext.define('QuickConfig.model.offerspec.OfferRelation', {
    extend: 'QuickConfig.model.Base',
    fields: [
        {name: 'id'},
        {name: 'relationType'},
        {name: 'relationTypeId'},
        {name: 'offerType'},
        {name: 'member'},
        {name: 'name'}
        //,
        //{name: 'area'},
        //{name: 'time'},
        //{name: 'state'},
        //{name: 'description'}
    ]
});


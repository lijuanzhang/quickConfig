/**
 * Created by Administrator on 2016/3/23.
 */
Ext.define('QuickConfig.model.offerspec.OfferComposition', {
    extend: 'QuickConfig.model.Base',
    fields: [
        {name: 'id'},
        {name: 'type'},
        {name: 'composition'},
        {name: 'minNum'},
        {name: 'maxNum'},
        {name: 'defaultNum'},
        {name: 'base'},
        {name: 'transition'},
        {name: 'renewal'},
        {name: 'base'}
    ]
});
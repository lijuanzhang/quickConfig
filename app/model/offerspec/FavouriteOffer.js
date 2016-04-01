Ext.define('QuickConfig.model.offerspec.FavouriteOffer', {
    extend: 'QuickConfig.model.Base',
    fields: [
        {name: 'name'},
        {name: 'code'},
        {name: 'description'},
        {name: 'favouritetime', type: 'date',  dateFormat: 'n/j h:ia'},
        {name: 'view'}
    ]
});

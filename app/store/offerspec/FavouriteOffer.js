Ext.define('QuickConfig.store.offerspec.FavouriteOffer', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.favouriteOffer',
    storeId:'favouriteOffer',
    model: 'QuickConfig.model.offerspec.FavouriteOffer',
    data: [
        [0,  '3m Co',                                       71.72, 0.02,  '9/1 12:00am', 'Manufacturing'],
        [1,  'Alcoa Inc',                                   29.01, 0.42,  '9/1 12:00am', 'Manufacturing'],
        [2,  'Altria Group Inc',                            83.81, 0.28,  '9/1 12:00am', 'Manufacturing'],
        [3,  'American Express Company',                    52.55, 0.01,  '9/1 12:00am', 'Finance'],
        [4,  'American International Group, Inc.',          64.13, 0.31,  '9/1 12:00am', 'Services'],
        [5,  'AT&T Inc.',                                   31.61, -0.48, '9/1 12:00am', 'Services'],
        //[6,  'Boeing Co.',                                  75.43, 0.53,  '9/1 12:00am', 'Manufacturing'],
        //[7,  'Caterpillar Inc.',                            67.27, 0.92,  '9/1 12:00am', 'Services'],
        //[8,  'Citigroup, Inc.',                             49.37, 0.02,  '9/1 12:00am', 'Finance'],
        //[9,  'E.I. du Pont de Nemours and Company',         40.48, 0.51,  '9/1 12:00am', 'Manufacturing'],
        //[10, 'Exxon Mobil Corp',                            68.1,  -0.43, '9/1 12:00am', 'Manufacturing']
    ]
});

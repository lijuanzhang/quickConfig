Ext.define('QuickConfig.view.offerspec.RecentlyConfig', {
    extend: 'Ext.panel.Panel',
    xtype: 'recentlyconfig',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date',
        'QuickConfig.model.offerspec.FavouriteOffer'
    ],
    iconCls: 'fa fa-pencil',
    title: '近期配置销售品',
    ui: 'mBasePanel',
    margin: '0 0 10 0',
    border: true,
    viewModel:{
        stores:{
            offerList:
            //Ext.create('Ext.data.ArrayStore',
            {
                model: 'QuickConfig.model.offerspec.FavouriteOffer',
                data: [
                    [0,  '乐享主副卡',                                       71.72, 0.02,  '9/1 12:00am', 'Manufacturing'],
                    [1,  '自主e版套餐',                                   29.01, 0.42,  '9/1 12:00am', 'Manufacturing'],
                    [2,  '校园宽带',                            83.81, 0.28,  '9/1 12:00am', 'Manufacturing'],
                ]
            }
//)
        }
    },
    items: [{
        xtype:'offerlist'
    }],
    name:'recentlyConfig'
});

Ext.define('QuickConfig.view.component.default.OfferList', {
    extend: 'QuickConfig.view.component.Base',
    xtype: 'offerlist',
    controller:'offerlist',
    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    config:{
        name:'',
        action:''
    },
    items: [{
        xtype: 'gridpanel',
        //hideHeaders: true,
        bind: '{offerList}',
        columns: [{
            xtype: 'gridcolumn',
            text:'销售品名称',
            dataIndex: 'name',
            flex: 1
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'code',
            text:'编码',
            flex: 2
        }, {
            xtype: 'gridcolumn',
            text:'销售品描述',
            dataIndex: 'description'
        }, {
            xtype: 'datecolumn',
            text:'配置日期',
            dataIndex: 'favouritetime'
        }, {
            xtype: 'actioncolumn',
            items: [{
                xtype: 'button',
                iconCls: 'x-fa fa-pencil'
            }],
            width: 40,
            dataIndex: 'view'
        }],
        listeners:{
            rowclick:'onRecentlyConfig'
        }
    }]
});

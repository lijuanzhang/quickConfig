Ext.define('QuickConfig.view.offerspec.Myoffer', {
  extend: 'Ext.panel.Panel',
  xtype: 'myofferpanel',
  requires: [
    'Ext.grid.Panel',
    'Ext.toolbar.Paging',
    'Ext.grid.column.Date'
  ],
  iconCls: 'fa fa-heart',
  title: '收藏的销售品',
    frame:true,
  items: [{
    xtype: 'gridpanel',

    hideHeaders: true,
    store: {
      type: 'favouriteOffer'
    },
    columns: [{
      xtype: 'gridcolumn',
      dataIndex: 'name',
      flex: 1
    }, {
      xtype: 'gridcolumn',
      dataIndex: 'code',
      flex: 2
    }, {
      xtype: 'gridcolumn',
      dataIndex: 'description'
    }, {
      xtype: 'datecolumn',
      dataIndex: 'favouritetime'
    }, {
      xtype: 'actioncolumn',
      items: [{
        xtype: 'button',
        iconCls: 'x-fa fa-pencil'
      }],
      width: 30,
      dataIndex: 'view'
    }]
  }]
});

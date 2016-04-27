Ext.define('QuickConfig.view.offerspec.Start', {
  extend: 'Ext.container.Container',
  xtype: 'offerspecstart',
  requires: ['QuickConfig.view.offerspec.Action', 'QuickConfig.view.offerspec.Wizard'],
  cls: 'offerspec-container',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },

  defaults: {
    margin: '0 0 20px 0'
  },
    actionId:'offer-start',
  items: [{
    xtype: 'container',
    border: false,
    layout: {
      type: 'hbox',
      align: 'stretch'
    },
    defaults: {
      xtype: 'offerspecaction'
    },
    items: [{
        flex:1,
      data: {
        icon: 'add.png',
        name: '新增',
        itemclass: 'offer-action-item-1',
        imagename: 'fa-plus',
        view: 'offerspec.Add'
      },
      actionId: 'offer-add'
    }, {
        flex:1,
      data: {
        icon: 'modify.png',
        name: '修改',
        itemclass: 'offer-action-item-3',
        imagename: 'fa-cog',
        view: 'offerspec.Modify'
      },
      actionId: 'offer-modify'
    },  {
        flex:1,
      data: {
        icon: 'history.png',
        name: '历史',
        itemclass: 'offer-action-item-5',
        imagename: 'fa-clock-o',
        view: 'offerspec.History'
      },
      actionId: 'offer-history'
    },{xtype:'container',flex:1},{xtype:'container',flex:1}]
  }, {
      xtype: 'unfinishoffer'
  },
      {
    xtype: 'myofferpanel'
  }]
});

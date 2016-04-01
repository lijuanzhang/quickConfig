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
      data: {
        icon: 'add.png',
        name: '新增',
        itemclass: 'offer-action-item-1',
        imagename: 'fa-plus',
        view: 'offerspec.Add'
      },
      actionId: 'offer-add'
    }, {
      data: {
        icon: 'append.png',
        name: '完善',
        itemclass: 'offer-action-item-2',
        imagename: 'fa-pencil-square-o',
        view: 'offerspec.Append'
      },
      actionId: 'offer-append'
    }, {
      data: {
        icon: 'modify.png',
        name: '修改',
        itemclass: 'offer-action-item-3',
        imagename: 'fa-cog',
        view: 'offerspec.Modify'
      },
      actionId: 'offer-modify'
    }, {
      data: {
        icon: 'restore.png',
        name: '恢复',
        itemclass: 'offer-action-item-4',
        imagename: 'fa-reply-all',
        view: 'offerspec.Restore'
      },
      actionId: 'offer-restore'
    }, {
      data: {
        icon: 'history.png',
        name: '历史',
        itemclass: 'offer-action-item-5',
        imagename: 'fa-clock-o',
        view: 'offerspec.History'
      },
      actionId: 'offer-history'
    }]
  }, {
    xtype: 'myofferpanel'
  }]
});

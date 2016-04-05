/*
 *销售品配置模版页面
 */
Ext.define('QuickConfig.view.offerspec.Config', {
  extend: 'Ext.container.Container',
  xtype: 'offerspecconfig',
  requires: ['QuickConfig.view.component.default.OfferBase'],
  layout: 'column',
  cls: 'offerspec-container',
  items: [{
    columnWidth: 0.8,
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    items: [{
      xtype: 'panel',
      title: '基本信息',
      ui: 'mBasePanel',
      margin: '0 0 10 0',
      border: true,
      items: [{
        xtype: 'default.offerbase'
      }]
    }]
  }, {
    columnWidth: 0.2
  }]
});

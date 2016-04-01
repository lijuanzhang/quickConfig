/*
 *销售品配置入口
 */
Ext.define('QuickConfig.view.offerspec.Offerspec', {
  extend: 'Ext.container.Container',
  xtype: 'offerspecmain',
    requires: ['QuickConfig.view.offerspec.Start'],
  layout: {
    type: 'card',
		anchor: '100%'
  },
  controller: 'offerspec',
  items: [{
    xtype: 'offerspecstart',
    border: false
  }]
});

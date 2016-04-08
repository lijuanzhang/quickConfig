/*
 *销售品配置模版页面
 */
Ext.define('QuickConfig.view.offerspec.Config', {
  extend: 'Ext.container.Container',
  xtype: 'offerspecconfig',
  requires: ['QuickConfig.view.component.default.OfferBase','QuickConfig.view.component.default.OfferComposition'],
  layout: 'column',
    controller:'config',
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
    },
        {
      xtype: 'panel',
      title: '销售品构成',
      ui: 'mBasePanel',
      margin: '0 0 10 0',
      border: true,
      items: [{
          xtype: 'default.offercomposition'
      }]
    },
        {
            xtype: 'container',
            //margin: '10px 0 0 0',
            layout: {
                type: 'vbox',
                align: 'end'
            },
            height:60,
            items: [{
                xtype: 'button',
                scale: 'large',
                ui: 'mNextBtn',
                cls: 'm-addbtn-next',
                text: '下一步',
                handler: 'onConfigNext',
                margin: '0 0 10px 0'
            }]
        }]
  }, {
    columnWidth: 0.2
  }]
});

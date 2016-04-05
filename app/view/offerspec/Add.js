/*
 *销售品配置新增页面
 */
Ext.define('QuickConfig.view.offerspec.Add', {
  extend: 'Ext.container.Container',
  xtype: 'offerspecadd',
  controller: 'add',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  cls: 'offerspec-container',
  defaults: {
    margin: '0 0 20px 0'
  },
  items: [{
    xtype: 'panel',
    title: '销售品类型',
    ui: 'mBasePanel',
    border: true,
    //padding: '5 15',
    items: [{
      xtype: 'radiogroup',
      hideLabel: true,
      reference: 'offerTypeSelect',
      cls: 'm-offer-type-select',
      defaults: {
        width: 120,
        style: {
          'vertical-align': 'middle'
        }
      },
      items: [{
        boxLabel: '主套餐',
        name: 'offer-type',
        inputValue: 1
      }, {
        boxLabel: '可选包',
        name: 'offer-type',
        inputValue: 2,
        checked: true
      }, {
        boxLabel: '促销',
        name: 'offer-type',
        inputValue: 3
      }]
    }]
  }, {
    xtype: 'panel',
    title: '创建方式',
    ui: 'mBasePanel',
    margin: '0 0 10 0',
    border: true,
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    items: [{
      layout: 'hbox',
      defaults: {
        height: 120,
        width: 120,
        border: true,
        cls: 'add-way add-way-hover'
      },
      items: [{
        html: '<div class="big-square-image"><div class="fa fa-file-o color-blue"></div><a>默认创建</a></div>',
        margin: '10 10 10 15'
      }, {
        html: '<div class="big-square-image"><div class="fa fa-file-text-o color-green"></div><a>通过模版创建</a></div>',
        margin: '10 10 10 0'
      }, {
        html: '<div class="big-square-image"><div class="fa fa-files-o color-orange"></div><a>从销售品复制</a></div>',
        margin: '10 10 10 0'
      }]
    }, {
      xtype: 'component',
      cls: 'm-panel-desc',
      html: '<a>根据系统预设的业务模版，如我的e家、乐享主副卡、' +
        '终端补贴等模版，配置人员仅需填写一些关键信息，快速创建销售品</a>'
    }]
  }, {
    xtype: 'container',
    //margin: '10px 0 0 0',
    layout: {
      type: 'vbox',
      align: 'end'
    },
    items: [{
      xtype: 'button',
      scale: 'large',
      ui: 'mNextBtn',
      cls: 'm-addbtn-next',
      text: '下一步',
      handler: 'onSelectNext'
    }]
  }]
});

/*
 *销售品配置新增页面
 */
Ext.define('QuickConfig.view.offerspec.Add', {

  extend: 'Ext.container.Container',
  xtype: 'offerspecadd',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
    controller:'add',
  cls: 'offerspec-container',
  defaults: {
    margin: '0 0 20px 0'
  },
    viewModel:{
        data:{
            nextPage: {
                name: 'nextProcess',
                itemclass: 'offer-button-nextProcecc',
                nextPageID:'2',
                typeID:'1',
                view:'offerspec.AddCheck',
                actionId:'offer-addCheck'
            }
        }
    },
  items: [{
    xtype: 'offerspecwizard',
    border: false,
    data: [{
      state: 'completed',
      faicon: 'fa-check-circle-o',
			stepindex: 'firststep',
      text: '初始化'
    }, {
      state: 'actived',
      faicon: 'fa-dot-circle-o',
			stepindex: 'nomalstep',
      text: '选模版'
    }, {
      state: 'inactived',
      faicon: 'fa-circle',
			stepindex: 'nomalstep',
      text: '配置'
    }, {
      state: 'inactived',
      faicon: 'fa-circle',
			stepindex: 'nomalstep',
      text: '校验'
    }, {
      state: 'inactived',
      faicon: 'fa-circle',
			stepindex: 'laststep',
      text: '保存'
    }]
  }, {
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
        height: 150,
        width: 150,
        border: true
      },
      items: [{
        html: '<a>',
        margin: '15 15 15 20'
      }, {
        html: '<b>',
        margin: '15 15 15 0'
      }, {
        html: '<c>',
        margin: '15 15 15 0'
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
        name:'nextProcess',
      text: '下一步'
    }]
  }]
});

Ext.define('QuickConfig.view.component.default.OfferBase', {
  extend: 'QuickConfig.view.component.Base',
  //extend: 'QuickConfig.view.container',
  minHeight: 200,
  xtype: 'default.offerbase',
  layout: 'column',
  requires: [
    //'QuickConfig.view.component.Base',
    'QuickConfig.view.ux.form.TextField'
  ],
  defaults: {
    //  layout: 'form',
    xtype: 'form',
    defaultType: 'ux.textfield',
    columnWidth: 0.5,
    //padding: '10 10 0 10',
    padding: '5 5 0 5',
    cls: 'form-columnlayout-item'
  },
  items: [{
    items: [{
      fieldLabel: '<b>销售品名称</b><span style="color:#e25856">*</span>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>系统编码</b><span style="color:#e25856">*</span>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>协议种类</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>所属地区</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>生效时间</b><span style="color:#e25856">*</span>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>失效时间</b><span style="color:#e25856">*</span>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>是否多产品销售品</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>预后标识</b>'
    }]
  }, {
    columnWidth: 1,
    items: [{
      fieldLabel: '<b>生失效规则</b><span style="color:#e25856">*</span>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>指定生效时间</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>指定失效时间</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>时长单位编码</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>有效时长</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>最大提前受理时间</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>要求在网时长</b>'
    }]
  }, {
    items: [{
      fieldLabel: '<b>月消费金额</b>'
    }]
  }, {
    xtype: 'container',
    height: 60
  }, {
    columnWidth: 1,
    items: [{
      fieldLabel: '<b>摘要</b>'
    }]
  }, {
    columnWidth: 1,
    items: [{
      fieldLabel: '<b>销售品描述</b>'
    }]
  }]
});

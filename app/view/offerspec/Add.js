/*
 *销售品配置新增页面
 */
Ext.define('QuickConfig.view.offerspec.Add', {
  extend: 'Ext.container.Container',
  xtype: 'offerspecadd',
  controller: 'add',
    requires:[ 'QuickConfig.model.offerspec.FavouriteOffer'  ],
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
      xtype: 'container',
      cls:'containerBorder',
      //title: '销售品类型',
      //ui: 'mBasePanel',
      itemId:'addType',
      width:'100%',
      //height:200,
      //border: true,
      layout:'hbox',
      //padding: '5 15',
      items: [
          {
              xtype:'container',
              //cls:'containerBorder',
              width:'100',
              height:'80',
              padding:'20',
              items:[
                  {   xtype:'label',
                      text:'新增方式',
                      style:{'font-size':'14px'}
                  }
              ]},
          {
          xtype: 'radiogroup',
          hideLabel: true,
          reference: 'addTypeSelect',
          //cls: 'm-offer-type-select',
          vertical: true,
              columns: 1,
          defaults: {
              width: 100,
              style: {
                  'vertical-align': 'middle'
              }
          },
          items: [{
              boxLabel: '批量新增',
              name: 'add-type',
              inputValue: 1,
              checked: true
          }, {
              boxLabel: '单个新增',
              name: 'add-type',
              inputValue: 2
          }]
      }]
  },
  //    {
  //  xtype: 'panel',
  //  title: '创建方式',
  //  ui: 'mBasePanel',
  //  margin: '0 0 10 0',
  //  border: true,
  //  layout: {
  //    type: 'vbox',
  //    align: 'stretch'
  //  },
  //  items: [{
  //    layout: 'hbox',
  //    defaults: {
  //      height: 120,
  //      width: 120,
  //      border: true,
  //      cls: 'add-way add-way-hover'
  //    },
  //    items: [{
  //      html: '<div class="big-square-image"><div class="fa fa-file-o color-blue"></div><a>默认创建</a></div>',
  //      margin: '10 10 10 15'
  //    }, {
  //      html: '<div class="big-square-image"><div class="fa fa-file-text-o color-green"></div><a>通过模版创建</a></div>',
  //      margin: '10 10 10 0'
  //    }, {
  //      html: '<div class="big-square-image"><div class="fa fa-files-o color-orange"></div><a>从销售品复制</a></div>',
  //      margin: '10 10 10 0'
  //    }]
  //  }, {
  //    xtype: 'component',
  //    cls: 'm-panel-desc',
  //    html: '<a>根据系统预设的业务模版，如我的e家、乐享主副卡、' +
  //      '终端补贴等模版，配置人员仅需填写一些关键信息，快速创建销售品</a>'
  //  }]
  //},
      {
    xtype: 'panel',
    title: '通过模板创建',
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
          xtype: 'offerbytemplatepanel',
          width:'400',
          reference:'chooseTempAndOffer',
          minWidth:200,
          viewModel:{
              stores:{
                  offerByTemplate:{
                      model:'QuickConfig.model.offerspec.FavouriteOffer',
                      data:[]
                  }
              }
          }
          //columns: [{
          //    header: '模板名称',
          //    dataIndex: 'name',
          //    flex: 1,
          //    editor: {
          //        allowBlank: false
          //    }
          //},{
          //    xtype: 'actioncolumn',
          //    width: 30,
          //    sortable: false,
          //    menuDisabled: true,
          //    items: [{
          //        iconCls: 'cell-editing-delete-row',
          //        tooltip: 'Delete',
          //        scope: this,
          //        handler: this.onRemoveClick
          //    }]
          //}],
          //initComponent: function () {
          //    var me = this;
          //    Ext.apply(this, { tbar: [{
          //        text: '继续添加',
          //        itemId:'addRowBtn',
          //        scope: this,
          //        cls:'mBtn',
          //        handler: this.onAddClick
          //    }]});
          //        //,
          //    console.log("initComponent dynpanel");
          //    this.callParent();
          //}
      },
      {
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

Ext.define('QuickConfig.view.offerspec.Start', {
  extend: 'Ext.container.Container',
  xtype: 'offerspecstart',
  requires: ['QuickConfig.view.offerspec.Action', 'QuickConfig.view.offerspec.Wizard'],
  cls: 'offerspec-container',
  layout: {
    type: 'hbox'
  },

  defaults: {
    margin: '0 0 20px 0'
  },
    actionId:'offer-start',
  items: [{
      xtype:'container',
      flex:1
  },{
      xtype: 'container',
      flex:4,
      padding:10,
      style:{

         border: '1px solid #eee'
     },
      layout: {
          type: 'vbox',
          align: 'stretch'
      },
      cls:'containerBorder',
      items: [
          {
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
                      name: '配置记录',
                      itemclass: 'offer-action-item-5',
                      imagename: 'fa-clock-o',
                      view: 'offerspec.History'
                  },
                  actionId: 'offer-history'
              },{xtype:'container',flex:1}]
          },
          {
              xtype:'mytitle',
              maxWidth:640,
              data:{
                  title:'待配置需求单'
              }
          },{
              xtype: 'unfinishoffer',
              header:false,
              maxWidth:640
          },
          {
              xtype:'mytitle',
              maxWidth:640,
              data: {
                  title: '近期配置销售品'
              }

          },
          {
              xtype: 'recentlyconfig',
              header:false,
              maxWidth:640
          },
          {
              xtype:'mytitle',
              maxWidth:640,
              data:{
                  title:'我的收藏'
              }
          },
          {
              xtype: 'myofferpanel',
              header:false,
              colunmLines:true,
              maxWidth:640
          }
      ]
  },
      {
          xtype:'container',
          flex:1
      }
]
});

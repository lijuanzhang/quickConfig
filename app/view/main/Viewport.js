Ext.define('QuickConfig.view.main.Viewport', {
  extend: 'Ext.container.Viewport',
  xtype: 'mainviewport',

  requires: [
    'Ext.list.Tree',
    'QuickConfig.view.main.NavigationTreeItem',
    'QuickConfig.view.main.MainContainerWrap'
  ],

  controller: 'mainviewport',
  viewModel: {
    type: 'mainviewport'
  },

  cls: 'sencha-dash-viewport',
  itemId: 'mainView',

  layout: {
    type: 'vbox',
    align: 'stretch'
  },

  listeners: {
    render: 'onMainViewRender'
  },

  items: [{
    xtype: 'toolbar',
    cls: 'sencha-dash-dash-headerbar',
    height: 60,
    itemId: 'headerBar',
    items: [{
      xtype: 'component',
      reference: 'senchaLogo',
      cls: 'sencha-logo',
      html: '<div class="main-logo"><img src="resources/images/sencha-icon.png">一点配置</div>',
      width: 230
    }, {
      margin: '0 0 0 8',
      cls: 'delete-focus-bg',
      iconCls: 'x-fa fa-navicon',
      id: 'main-navigation-btn',
      handler: 'onToggleNavigationSize'
    }, {
      xtype: 'combobox',
      cls: 'toolbar-combo',
      store: {
        fields: ['id', 'name'],
        data: [{
          'id': 1,
          'name': '全省'
        }, {
          'id': 2,
          'name': '成都'
        }, {
          'id': 3,
          'name': '遂宁'
        }]
      },
      autoSelect: false,
      displayField: 'name',
      valueField: 'id',
      value: 1,
      editable: false,
      queryMode: 'local',
      width: 150,
      tpl: Ext.create('Ext.XTemplate',
        '<ul class="x-list-plain toolbar-ul"><tpl for=".">',
        '<li role="option" class="x-boundlist-item"><a>{name}</a></li>',
        '</tpl></ul>'
      ),
      listConfig: {
        'cls': 'toolbar-combo-boundlist',
        'overItemCls':'toolbar-boundlist-item-over'
      }
    }, {
      xtype: 'tbspacer',
      flex: 1
    }, {
      xtype: 'textfield',
      width: 200,
      triggers: {
        search: {
          cls: 'x-form-search-trigger'
        }
      }
    }, {
      cls: 'delete-focus-bg',
      iconCls: 'x-fa fa-user'
    }, {
      xtype: 'tbtext',
      text: '邓超',
      cls: 'top-user-name'
    }, ]
  }, {
    xtype: 'toolbar',
    cls: 'navigationbar toolbar-btn-shadow',
    height: 40,
    items:[{
      xtype: 'component',
      cls: 'navigationbar-title',
      reference: 'navigationTitle',
      html: '<a>导航栏</a>',
      width: 230
    }, {
      xtype: 'breadcrumb',
      store: 'NavigationTree',
      reference: 'navigationBreadcrumb',
      showIcons: true
    }]
  },{
    xtype: 'maincontainerwrap',
    id: 'main-view-detail-wrap',
    reference: 'mainContainerWrap',
    flex: 1,
    items: [{
      xtype: 'treelist',
      reference: 'navigationTreeList',
      itemId: 'navigationTreeList',
      ui: 'navigation',
      store: 'NavigationTree',
      width: 230,
      expanderFirst: false,
      expanderOnly: false,
      style: {
        'padding-top': '10px',
        'border-right': '1px solid #ddd'
      },
      defaults: {
        xtype: 'ntreelistitem'
      },
      listeners: {
        selectionchange: 'onNavigationTreeSelectionChange'
      }
    }, {
      xtype: 'container',
      flex: 1,
      reference: 'mainCardPanel',
      cls: 'sencha-dash-right-main-container',
      itemId: 'contentPanel',
      layout: {
        type: 'card',
        anchor: '100%'
      }
    }]
  }]
});

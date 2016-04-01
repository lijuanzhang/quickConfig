Ext.define('QuickConfig.view.offerspec.Action', {
  extend: 'Ext.Component',
  xtype: 'offerspecaction',
  //  cls: 'offerspec-action-panel shadow-panel',
  controller: 'action',
  tpl: '<div class="offerspec-action-container {itemclass}"><div class="offerspec-action-item">' +
    //  '<img src="resources/images/icons/{icon}" alt="{tip}"/>' +
    '<div class="fa {imagename} fa-4x"></div>' +
    '<div class="offerspec-action-name">{name}</div>' +
    '</div></div>',
  data: {
    icon: null,
    name: null,
    tip: null,
    itemclass: null,
    imagename: null
  },
  actionId:null,
  flex: 1
});

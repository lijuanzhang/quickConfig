Ext.define('QuickConfig.view.offerspec.MyTitle', {
    extend: 'Ext.Component',
    xtype: 'mytitle',
    //  cls: 'offerspec-action-panel shadow-panel',
    //controller: 'action',
    tpl: '<div style="height:37px;padding:10px" class="containerBorder-bottom containerBorder-top" >' +
    '<div style="font-size:16px  ;font-family: 微软雅黑;color:#6A82FF">{title}' +
    '</div></div>',
    data: {
        title: null
    },
    //actionId:null,
    flex: 1
});

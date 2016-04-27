/*
 *销售品配置入口
 */
Ext.define('QuickConfig.view.offerspec.OfferForRequire', {
    extend: 'Ext.container.Container',
    xtype: 'offerforrequire',
    requires: ['QuickConfig.view.offerspec.Start'],
    layout: {
        type: 'card',
        anchor: '100%'
    },
    items: [{
        xtype: 'container',
        align:"center",
        width:500,
        height:500,

        items:{
            xtype:'component',
            html: '需求单配置界面',
            height:100,
            padding:50}
    }]
});

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
            xtype: 'container',
    layout: {
    type: 'vbox',
        align: 'stretch'
},
items: [{
    xtype:'panel',
    border:true,
    layout: 'card',

    viewModel:{
        data: {
            atBeginning: true,
            atEnd: false
        }
    },
    tbar: {
        reference: 'progress',
        cls: 'wizardprogressbar',
        defaults: {
            disabled: true,
            iconAlign: 'top'
        },
        layout: {
            pack: 'center'
        },
        items: [
            {
                step: 0,
                cls: 'active',
                text: '基本信息'
            },
            {
                step: 1,
                text: '销售品目录'
            },
            {
                step: 2,
                text: '销售品构成'
            },
            {
                step: 3,
                text: '销售品关系'
            }
        ]
    },
    defaults: {
        ui: 'mBasePanel',
        margin: '0 0 10 0',
        xtype:'container',
        style:{border:'1px solid #eee', 'margin-top': 10,
            padding: 10}
        //xtype: 'panel'

    },
    items: [{
        title: '基本信息',
        items: [{
            xtype: 'default.offerbase'
        }]
    },
        {
            title: '销售品目录',
            items: [{
                xtype:'component',
                html:'销售品目录组件，正在开发中...',
                height:80
            }]
        },
        {
            title: '销售品构成',
            items: [{
                xtype: 'default.offercomposition'
            }]
        },
        {
            title: '销售品关系',
            items: [{
                xtype: 'default.offerrelation'
            }]
        }],
    bbar: {
        reference: 'navigation-toolbar',
        //margin: 8,
        items: [
            '->',
            {
                text: '上一步',
                ui: 'green',
                formBind: true,
                bind: {
                    disabled: '{atBeginning}'
                },
                listeners: {
                    click: 'onPreviousClick'
                }
            },
            {
                text: '下一步',
                ui: 'green',
                formBind: true,
                reference : 'nextbutton',
                bind: {
                    disabled: '{atEnd}'
                },
                listeners: {
                    click: 'onNextClick'
                }
            }
        ]
    }
},
            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'end'
                },
                height:70,
                items: [{
                    xtype: 'button',
                    scale: 'large',
                    ui: 'mNextBtn',
                    cls: 'm-addbtn-next',
                    text: '下一步',
                    handler: 'onConfigNext',
                    margin: '10 0 10px 0'
                }]
            }
            //{
            //    xtype: 'panel',
            //    title: '销售品关系',
            //    ui: 'mBasePanel',
            //    margin: '0 0 10 0',
            //    border: true,
            //    items: [{
            //        xtype: 'testtab'
            //    }]
            //}
        ]
    },
        {
            columnWidth: 0.2
        }]
});
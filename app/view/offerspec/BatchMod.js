/**
 * Created by Administrator on 2016/3/25
 */
/*
 *销售品配置修改页面--批量修改页面
 */
Ext.define('QuickConfig.view.offerspec.BatchMod', {
    extend: 'Ext.container.Container',
    xtype: 'offerspecbatchmod',
    id: 'offerspecchoosetomodify',
    requires: ['QuickConfig.view.component.default.OfferBase',
        'QuickConfig.view.component.default.OfferComposition'],
    controller:'batchmod',
    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    cls: 'offerspec-container',
    defaults: {
        margin: '0 0 20px 0'
    },
    viewModel:{
        data:{
            modifyType:'MULTI',
            attType:'基本信息',
            nextPage: {
                name: 'nextProcess',
                itemclass: 'offer-button-nextProcecc',
                nextPageID:'24',
                typeID:'2',
                view:'offerspec.ModCheck',
                actionId:'offer-modCheck'
            }

        }
    },
    items:[
        {
            xtype: 'panel',
            title: '基本信息',
            ui: 'mBasePanel',
            margin: '0 0 10 0',
            border: true,
            items: [{
                xtype: 'default.offerbase'
            }]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'end'
            },
            items: [
                {
                    xtype: 'button',
                    scale: 'large',
                    ui: 'mNextBtn',
                    cls: 'm-addbtn-next',
                    name:'nextProcess',
                    text: '下一步'
                }
            ]
        }
    ]
});

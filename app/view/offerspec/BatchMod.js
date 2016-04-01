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
    requires: [
        'Ext.tree.*',
        'Ext.data.*'
    ],
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
    items:[{
        xtype:'container',
        layout:'hbox',
        cls:'headerContainer',
        items:[{
            xtype:'label',
            text:'主页/销售品配置 - 修改',
            cls:'operater-title',
            flex:1
        },
            {
                xtype: 'offerspecwizard',
                border: false,
                data: [{
                    state: 'completed',
                    faicon: 'fa-check-circle-o',
                    stepindex: 'firststep',
                    text: '选择'
                }, {
                    state: 'completed',
                    faicon: 'fa-check-circle-o',
                    stepindex: 'nomalstep',
                    text: '选择修改内容'
                }, {
                    state: 'actived',
                    faicon: 'fa-dot-circle-o',
                    stepindex: 'nomalstep',
                    text: '修改'
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
            }
        ]
    },{
        xtype: 'container',
        border:'true',
        items :{
            xtype:'label',
            bind:{text:'{attType}'}
        }
    },
        {

              xtype:'mmodtable'
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

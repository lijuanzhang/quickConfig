/**
 * Created by Administrator on 2016/3/25
 */
/*
 *销售品配置修改页面--批量修改页面
 */
Ext.define('QuickConfig.view.offerspec.ModCheck', {
    extend: 'Ext.container.Container',
    xtype: 'offerspecmodcheck',
    id: 'offerspecmodcheck',
    controller:'modcheck',
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
                itemclass: 'offer-button-nextProcec',
                nextPageID:'25',
                typeID:'2',
                view:'offerspec.modCheck',
                actionId:'offer-modCheck'
            },
            prePage: {
                name: 'prePage',
                itemclass: 'offer-button-nextProcec',
                nextPageID:'23',
                typeID:'2',
                view:'offerspec.BatchMod',
                actionId:'offer-batchMod'
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
                flex:2,
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
                    state: 'completed',
                    faicon: 'fa-check-circle-o',
                    stepindex: 'nomalstep',
                    text: '修改'
                }, {
                    state: 'actived',
                    faicon: 'fa-dot-circle-o',
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
    },
        {
            xtype: 'panel',
            //style:'border:1px solid #C5D2D0',
            title:'销售品配置检查',
            ui: 'mBasePanel',
            minHeight:250,
            border: true,
            items:[
                {
                    xtype:'container',
                    layout:'vbox',
                    width:'100%',
                    defaults:{
                        cls: 'checkResult'
                    },
                    items:[
                        {
                            xtype:'container',
                            layout:'hbox',
                            width:'100%',
                            //cls: 'checkResult',
                            items:[{
                                xtype:'label',
                                bind:{text:'销售品 【{attType}】- 类型'},
                                cls:'checkInfo',
                                flex:3
                            },
                                {
                                    xtype:'container',
                                    cls:'fa fa-check fa-lg',
                                    flex:1
                                }]
                        }]
                }]
        },
        {
            xtype:'container',
            layout:'hbox' ,
            items:[
                {
                    xtype: 'container',
                    flex:1,
                    layout: {
                        type: 'vbox',
                        align: 'begin'
                    },
                    items: [
                        {
                            xtype: 'button',
                            scale: 'large',
                            ui: 'mBackBtn',
                            name:'backToMod',
                            text: '返回修改',
                            cls: 'm-addbtn-next',
                            docked:'left'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex:1,
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
                            name:'submitBtn',
                            text: '提交'
                        }
                    ]
                }
            ]

        }

    ]
});


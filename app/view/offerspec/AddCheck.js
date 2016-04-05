/**
* Created by Administrator on 2016/3/25
*/
/*
*销售品配置修改页面--新增页面
*/
Ext.define('QuickConfig.view.offerspec.AddCheck', {
    extend: 'Ext.container.Container',
    xtype: 'offerspecaddcheck',
    id: 'offerspecaddcheck',
    controller:'addcheck',
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
                nextPageID:'25',
                typeID:'5',
                view:'offerspec.Save',
                actionId:'offer-addSave'
            },
            checkStyle:'fa fa-close fa-8x'

        }
    },
    items:[{
        xtype:'container',
        layout:'hbox',
        cls:'headerContainer',
        items:[{
            xtype:'label',
            text:'主页/销售品配置 - 新增',
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
                    text: '初始化'
                }, {
                    state: 'completed',
                    faicon: 'fa-check-circle-o',
                    stepindex: 'nomalstep',
                    text: '选模版'
                }, {
                    state: 'completed',
                    faicon: 'fa-check-circle-o',
                    stepindex: 'nomalstep',
                    text: '配置'
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
            minHeight:300,
            border: true,
            layout:'vbox',
            items:[
                {
                    xtype:'container',
                    layout:'vbox',
                    cls:'containerBorder-bottom',
                    width:'100%',
                    items:[{
                        xtype: 'container',
                        width:'100%',
                        style:{
                            'padding-top':20
                        },
                        data: [{
                            attType: '基本信息',
                            checkResultType: 'result-right'
                        },
                            {
                                attType: '产品结构',
                                checkResultType: 'result-false'
                            },
                            {
                                attType: '关联关系',
                                checkResultType: 'result-warming'
                            },
                            {
                                attType: '配置要求',
                                checkResultType: 'result-spinner'
                            },
                            {
                                attType: '产品结构',
                                checkResultType: 'result-right'
                            }],
                        tpl: Ext.create('Ext.XTemplate',
                            '<tpl for=".">',
                            '<div class="vbox-item-separator">',
                            '<div style="display:inline-block;width:70%" >',
                            '<div style ="height:50px;font-size:14px; padding:15px 50px">销售品【{attType}】</div>',
                            '</div>',
                            '<div style="display:inline-block;width:30%" >',
                            '<div style="" class = "{checkResultType} "></div>',
                            '</div>',
                            '</div>',
                            '</tpl>'
                        )
                    }]
                },
                {
                    xtype:'container',
                    layout:'vbox',
                    width:'100%',
                    items:[
                        {
                            xtype:'container',
                            width:"100%",
                            data: [{
                                warmingType: '错误',
                                warmingInfo: '这里发生了一个错误'
                            },
                                {
                                    warmingType: '警告',
                                    warmingInfo: '这里出现了一个警告'
                                }],
                            tpl: Ext.create('Ext.XTemplate',
                                '<div style="width:100%">',
                                '<tpl for=".">',
                                //'<div style="display:inline-block;width:70%" >',
                                '<div style ="height:45px;font-size:14px; padding:15px 50px" class ="vbox-item-separator">' ,
                                '<span style="width:100px; ">{warmingType}:</span>' +
                                '<span style="">{warmingInfo}</span>' +
                                '</div>',
                                //'</div>',
                                '</tpl>',
                                '<div>'
                            )
                        }
                    ]

                },
            ]
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
                            cls: 'm-addbtn-next'
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
                            ui: 'mSubmitBtn',
                            cls: 'm-addbtn-next',
                            name:'submit',
                            text: '提交'
                        }
                    ]
                }
            ]
        }
    ]
});


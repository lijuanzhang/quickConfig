/**
 * Created by Administrator on 2016/3/25
 */
/*
 *销售品配置修改页面--新增页面
 */
Ext.define('QuickConfig.view.offerspec.Save', {
    extend: 'Ext.container.Container',
    xtype: 'offerspecsave',
    id: 'offerspecsave',
    controller:'save',
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
                typeID:'2',
                view:'offerspec.modCheck',
                actionId:'offer-modCheck'
            },
            checkStyle:'fa fa-close fa-8x'

        }
    },
    items:[
    //    {
    //    xtype:'container',
    //    layout:'hbox',
    //    cls:'headerContainer',
    //    items:[{
    //        xtype:'label',
    //        text:'主页/销售品配置 - 新增',
    //        cls:'operater-title',
    //        flex:1
    //    },
    //        {
    //            xtype: 'offerspecwizard',
    //            border: false,
    //            data: [{
    //                state: 'completed',
    //                faicon: 'fa-check-circle-o',
    //                stepindex: 'firststep',
    //                text: '初始化'
    //            }, {
    //                state: 'completed',
    //                faicon: 'fa-check-circle-o',
    //                stepindex: 'nomalstep',
    //                text: '选模版'
    //            }, {
    //                state: 'completed',
    //                faicon: 'fa-check-circle-o',
    //                stepindex: 'nomalstep',
    //                text: '配置'
    //            }, {
    //                state: 'actived',
    //                faicon: 'fa-dot-circle-o',
    //                stepindex: 'nomalstep',
    //                text: '校验'
    //            }, {
    //                state: 'inactived',
    //                faicon: 'fa-circle',
    //                stepindex: 'laststep',
    //                text: '保存'
    //            }]
    //        }
    //    ]
    //},
        {
            xtype: 'panel',
            //style:'border:1px solid #C5D2D0',
            title:'销售品配置保存',
            ui: 'mBasePanel',
            minHeight:240,
            border: true,
            layout:'vbox',
            items:[
                {
                    xtype:'container',
                    layout:'vbox',
                    width:'100%',
                    cls:'containerBorder-bottom',
                    items:[
                        {
                            xtype:'container',
                            width:'100%',
                            minHeight:150,
                            style:{
                                padding:'60px'
                            },
                            //cls: 'checkResult',
                            layout:{
                                type:'vbox',
                                align:'center'},
                            items:[{
                                xtype:'container',
                                items:[{
                                    xtype:'container',
                                    cls:'fa fa-check-circle-o fa-lg m-check-circle-o '
                                }]
                            },
                                {
                                    xtype:'container',
                                    items:[{
                                        xtype:'label',
                                        style:{
                                            'font-size':'18px'
                                        },
                                        text:'保存成功'
                                    }]
                                }
                            ]
                        }]
                },
                {
                    xtype:'container',
                    width:'100%',
                    minHeight:60,
                    style:{
                        //border: '1px solid #eeeeee',
                        padding:'20px 50px'},
                    items:[
                        {
                            xtype:'container',
                            layout:'hbox',
                            width:'100%',
                            //cls: 'checkResult',
                            items:[{
                                xtype:'container',
                                flex: 8,
                                items:[ {
                                    xtype: 'label',
                                    text: '销售品保存成功，您可以继续配置，也可以收藏此销售品。收藏后下次将出现在您的收藏列表中。',
                                    style:{
                                        'font-size':'14px'
                                    }
                                }]
                            },
                                {
                                    xtype:'container',
                                    flex: 1,
                                    items:[ {
                                        xtype:'button',
                                        ui:'mBtn',
                                        name:'favour',
                                        cls: 'm-mBtn',
                                        scale:'small',
                                        text:'收藏'
                                    }]
                                }
                               ]
                        }]
                }
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
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            scale: 'large',
                            ui: 'mNextBtn',
                            name:'continue',
                            actionId:'add',
                            text: '继续配置',
                            cls: 'm-addbtn-next'
                        }
                    ]
                }
            ]

        }

    ]
});


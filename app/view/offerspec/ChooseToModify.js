/**
* Created by Administrator on 2016/3/24.
*/
/*
*销售品配置修改页面
*/
Ext.define('QuickConfig.view.offerspec.ChooseToModify', {
    extend: 'Ext.container.Container',
    xtype: 'offerspecchoosetomodify',
    id: 'offerspecbatchmod',
    controller:'ctmodify',
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
            nextPage: {
                name: 'nextProcess',
                itemclass: 'offer-button-nextProcecc',
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
                data: [{
                    state: 'completed',
                    faicon: 'fa-check-circle-o',
                    stepindex: 'firststep',
                    text: '选择'
                }, {
                    state: 'actived',
                    faicon: 'fa-dot-circle-o',
                    stepindex: 'nomalstep',
                    text: '选择修改内容'
                }, {
                    state: 'inactived',
                    faicon: 'fa-circle',
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
    },
        {
            xtype: 'container',
            layout: 'hbox',

            items:[{
                    xtype: 'container',
                   flex:1,
                   margin:'0 20 0 0',
                    items:[
                        {
                            xtype: 'treepanel',
                            reference:'attrsTree',
                            rootVisible: false,
                            store:{type:'OfferInfo'} ,

                            title: '销售品信息结构',
                            height: 400,

                            frame:true,
                            flex:1,
                            lines: false
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title:'当期各销售品取值',
                    reference:'itemsModPanel',
                    height: 400,
                    flex:1,
                    layout: 'column',
                    defaults:{
                        columnWidth: 1,
                        padding: '10 10 0 10',
                        cls: 'form-columnlayout-item',
                        xtype:'ux.textfield',
                        labelWidth: 150
                    },
                    //store:{type:'offers'},
                    frame:true,
                    items:[
                        //{
                        //xtype: 'mtextfield',
                        //border: false,
                        //data: [{
                        //    name: '乐享189套餐',
                        //    type: 'name',
                        //    value:'123'
                        //}, {
                        //    name: 'e8-华为Mate8终端促销',
                        //    type: 'name',
                        //    value:'2345'
                        //}, {
                        //    name: 'e8-华为Mate8终端促销',
                        //    type: 'name',
                        //    value:'-1'
                        //}]
                        {
                            fieldLabel: '乐享189套餐',
                            //type: 'name',
                            value:'123'
                        }, {
                            fieldLabel: 'e8-华为Mate8终端促销',
                            type: 'name',
                            value:'2345'
                        }, {
                            fieldLabel: 'e8-华为Mate8终端促销',
                            type: 'name',
                            disabled:true
                        }
                //}
                ]
                }
            ]
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

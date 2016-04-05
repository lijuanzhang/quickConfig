/*
 *销售品配置修改页面
 */
Ext.define('QuickConfig.view.offerspec.Modify', {
	extend: 'Ext.container.Container',
	xtype: 'offerspecmodify',
	id: 'offerspecmodify',
    controller:'offerModify',
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
            selectedOffersText:{
                MULTI:'批量修改队列',
                SINGLE:'单个修改'
            },
           selectedOffersTitle:'批量修改队列',
           nextPage: {
               name: 'nextProcess',
               itemclass: 'offer-button-nextProcecc',
               nextPageID:'22',
               typeID:'2',
               view:'offerspec.ChooseToModify',
               actionId:'offer-chooseToModify'
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
                    state: 'actived',
                    faicon: 'fa-dot-circle-o',
                    stepindex: 'firststep',
                    text: '选择'
                }, {
                    state: 'inactived',
                    faicon: 'fa-circle',
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
            xtype: 'panel',
            title: '修改模式',
            ui: 'mBasePanel',
            border: true,
            items: [{
                xtype: 'radiogroup',
                hideLabel: true,
                reference: 'modifyTypeRG',
                //bind:{value:'{modifyType}'},
                cls: 'm-offer-type-select',
                defaults: {
                    width: 120,
                    style: {
                        'vertical-align': 'middle'
                    }
                },
                //listeners:{
                //    change:'onModifyTypeChange'
                //},
                items: [{
                    boxLabel: '单个修改',
                    name: 'modifytype',
                    //value:'单个修改',
                    inputValue: 'SINGLE'
                }, {
                    boxLabel: '批量修改',
                    name: 'modifytype',
                    inputValue: 'MULTI',
                    checked: true
                    //value:'批量修改',

                }]
            }]
        },
        {
            xtype: 'panel',
            title: '销售品查找',
            //name:'offer-search',
            ui: 'mBasePanel',
            margin: '0 0 10 0',
            border: true,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults:{
                cls: 'vbox-item'
            },
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults:{
                        labelWidth:80,
                        //labelCls:'labels'
                        labelAlign: 'right'
                        //width:300
                        //cls:'spec-com-field'
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: '名称',
                        style:'spec-name-field',
                        cls:'spec-name-field',
                        //labelCls:'labels',
                        //labelAlign: 'right',
                        //labelWidth:'40',
                        name: 'tplName',

                        //billingFieldName: 'billingCity',
                        //flex: 1,
                        allowBlank: false
                    },
                    //    {
                    //    xtype: 'component',
                    //    width:'50'
                    //},
                        {
                            xtype: 'textfield',
                            fieldLabel: '编码',
                            //labelAlign: 'right',
                         //width:'40%',
                            name: 'offerspecCode',
                            //billingFieldName: 'billingCity',
                            //flex: 1,
                            allowBlank: false
                    },
                    //    {
                    //    xtype: 'component',
                    //    width:'50'
                    //},
                        {
                            fieldLabel: '类型',
                            //labelAlign: 'right',
                            //width: '20%',
                            xtype: 'combobox',
                            name: 'tplType',
                            forceSelection: true,
                            enforceMaxLength: true,
                            //listeners: {
                            //    scope: this,
                            //    change: this.onMailingAddrFieldChange
                            //},
                            //flex:1,
                            listConfig: {
                                minWidth: null
                            },
                            //store:{type:'templateType'},
                            valueField: 'name',
                            displayField: 'name',
                            typeAhead: true,
                            queryMode: 'local',
                            allowBlank: false
                        }]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults:{
                        //cls:'hbox-item',
                        labelWidth:80,
                        labelAlign: 'right'
                    },
                    items: [
                        {   xtype: 'fieldcontainer',
                            fieldLabel: '上市时间',
                            //combineErrors: true,
                            //cls:'hbox-item',
                            flex:3,
                            msgTarget : 'side',
                            layout: 'hbox',
                            defaults: {
                                hideLabel: true
                            },
                            items:[
                                {
                                    xtype: 'datefield',
                                    name: 'startTime'
                                },
                                {xtype: 'displayfield', value: '~',
                                    margin:'0 20'},
                                {
                                    fieldLabel: '',
                                    xtype: 'datefield',
                                    //flex:4,
                                    name: 'endTime'
                                }
                            ]
                        },
                        {
                            xtype:'container',
                            layout:'hbox',
                            flex:2,
                            items:[
                            {
                                xtype: 'button',
                                text: '查询',
                                id:'searchButton',
                                ui: 'mBtn',
                                scale:'small',
                                cls:'m-mBtn'
                                //listeners: {
                                //    scope: this,
                                //    change: this.onMailingAddrFieldChange
                                //}
                                //flex:1,
                                //width: 100
                            },
                                {
                                    xtype: 'button',
                                    text: '高级查询',
                                    name: 'offerSearch',
                                    scale:'small',
                                    ui: 'mBtn',
                                    cls: 'm-mBtn'
                                }]
                        }
                     ]
                },{
                xtype: 'gridpanel',
                frame: true,
                columnLines: true,
                    cls:'panel-contained',
                    //style: {
                    //    'margin': '10 20'
                    //},
                reference:'offersSearchGrid',

                id:'offersSearchGrid',
                selModel:{
                    type:'checkboxmodel',
                    header:'选择',
                    //mode:'{modifyType}'
                    mode:'MULTI'
                },
                store:{
                    type:'offers'
                },
                    viewConfig: {
                        emptyText: '请查询销售品',
                        deferEmptyText: false
                    },
                columns: [
                    {
                        header: '名称',
                        flex: 1,
                        dataIndex: 'name'
                    }, {
                        header: '编码',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'code'
                    }, {
                        header: '类型',
                        flex: 1,
                        dataIndex: 'type'
                    }, {
                        header: '区域',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'area'
                    }, {
                        header: '上市时间',
                        flex: 1,
                        dataIndex: 'time'
                    }, {
                        header: '状态',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'state'
                    }
                    , {
                        header: '查看',
                        flex: 1,
                        xtype: 'actioncolumn',
                        width: 20,
                        sortable: false,
                        menuDisabled: true,
                        items: [{
                            iconCls: 'fa fa-eye fa-2',
                            glyph:0x06e,
                            tooltip: 'Delete Plant',
                            scope: this,
                            handler: function(){
                                alert(" something todo!")
                            }
                        }]
                    }
                ]
            }]
        },
        {
            xtype: 'panel',
            bind:{ title: '{selectedOffersTitle}'},
            //name:'offer-search',
            ui: 'mBasePanel',
            margin: '0 0 10 0',
            border: true,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [     {
                xtype: 'gridpanel',
                frame: true,
                columnLines: true,
                check:true,
                selModel:{
                    type:'checkboxmodel',
                    header:'选择'
                },
                cls:'panel-contained',
                //bind:'{offersSearchGrid.selection}',
                store: new Ext.data.Store({
                    model: 'QuickConfig.model.offerspec.Offers'
                }),
                id:'selectedOffers',
                reference:'selectedOffers',
                columns: [
                    {
                        header: '名称',
                        flex: 1,
                        dataIndex: 'name'
                    }, {
                        header: '编码',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'code'
                    }, {
                        header: '类型',
                        flex: 1,
                        dataIndex: 'type'
                    }, {
                        header: '区域',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'area'
                    }, {
                        header: '上市时间',
                        flex: 1,
                        dataIndex: 'time'
                    }, {
                        header: '状态',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'state'
                    }
                    ,
                    {
                        header:'操作',
                        //menuDisabled: true,
                        sortable: false,
                        dataIndex: 'state',
                        width: 20,
                        flex: 1,
                        emptyCellText:'(-)',
                        dataIndex: 'operateState'
                    }
                    ],
                viewConfig: {
                    emptyText: '还未选择商品',
                    deferEmptyText: false
                }
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
                    id:'nextProcess',
                    text: '下一步'
            }
            ]
        }
    ]
});
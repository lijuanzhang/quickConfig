/**
 * Created by Administrator on 2016/4/5.
 */
/*
 *销售品组成页面
 */
Ext.define('QuickConfig.view.offerspec.OfferComposition', {
    extend: 'Ext.container.Container',
    xtype: 'offercomposition',
    //requires: ['QuickConfig.view.component.default.OfferComposition'],
    layout: 'column',
    cls: 'offerspec-container',
    controller:'offercomposition',
    viewModel:{
        data:{
            nextPage: {
                //name: 'nextProcess',
                //itemclass: 'offer-button-nextProcecc',
                //nextPageID:'13',
                //typeID:'1',
                view:'offerspec.AddCheck',
                actionId:'offer-addCheck'
            }
        }
    },
    items: [{
        columnWidth: 0.8,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'panel',
            title: '销售品构成',
            ui: 'mBasePanel',
            margin: '0 0 10 0',
            border: true,
            items: [{
                xtype:'container',
                layout:'column',
                defaults:{
                    xtype:'textfield',
                    labelAlign:'top',
                    labelSeparator:"",
                    columnWidth:'0.12',
                    border:'true',
                    minWidth:'90'
                },
                items:[
                    {
                        fieldLabel: '<b>构成角色</b><span style="color:#e25856"></span>',
                        columnWidth:'0.2'
                    },{
                        fieldLabel: '<b>系统编码</b><span style="color:#e25856"></span>',
                        columnWidth:'0.2'
                    },{
                        fieldLabel: '<b>是否核心成员</b><span style="color:#e25856"></span>'
                    },{
                        fieldLabel: '<b>最小数量</b><span style="color:#e25856"></span>'
                    },{
                        fieldLabel: '<b>最大数量</b><span style="color:#e25856"></span>'
                    },{
                        fieldLabel: '<b>最小生效数量</b><span style="color:#e25856"></span>'

                    },{
                        xtype:'container',
                        layout:'vbox',
                        items:[
                            {
                                xtype:'container',
                                height:30
                            },
                            {
                                xtype:'button',
                                scale:'small',
                                ui:'mBtn',
                                text:'添加',
                                name:"addMember",
                                iconAlign:'left',
                                cls:" addmember-textfiled "
                            }
                        ]
                    }
                ]
            },{
                xtype: 'gridpanel',
                frame: true,
                columnLines: true,
                //cls:'panel-contained',
                reference:'offerCompositionGrid',
                id:'offerCompositionGrid',
                store: new Ext.data.Store({
                    model: 'QuickConfig.model.offerspec.OfferComposition',
                    data:[[1,'','','','','','','','','','']]
                }),
                columns: [
                    {
                        header: '序号',
                        flex: 1,
                        dataIndex: 'id'
                    },{
                        header: '对象类型',
                        flex: 1,
                        dataIndex: 'type'
                    }, {
                        header: '成员对象',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'composition'
                    }, {
                        header: '最小数量',
                        flex: 1,
                        dataIndex: 'minNum'
                    }, {
                        header: '最大数量',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'maxNum'
                    }, {
                        header: '默认数量',
                        flex: 1,
                        dataIndex: 'defaultNum'
                    }, {
                        header: '基础销售品',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'base'
                    },{
                        header: '过渡销售品',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'transition'
                    }, {
                        header: '续订销售品',
                        flex: 1,
                        dataIndex: 'renewal'
                    }, {
                        header: '更多',
                        flex: 0.6,
                        xtype: 'actioncolumn',
                        minWidth: 30,
                        sortable: false,
                        menuDisabled: true,
                        items: [{
                            iconCls: 'fa fa-eye fa-2',
                            glyph:0x06e,
                            //tooltip: 'Delete Plant',
                            scope: this,
                            handler: function(){
                                alert(" more infomation!")
                            }
                        }]
                    }
                ]
            }]
        }]
    }, {
        columnWidth: 0.2
    }]
});

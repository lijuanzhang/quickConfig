
/*
 *销售品配置x新增页面--批量新增页面
 */
Ext.define('QuickConfig.view.offerspec.BatchAdd', {
    extend: 'Ext.container.Container',
    xtype: 'offerspecbatchadd',
    id: 'offerspecchoosetomodify',
    requires: ['QuickConfig.view.component.default.OfferBase',
        'QuickConfig.view.component.default.OfferComposition'],
    controller:'batchadd',
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
                itemclass: 'offer-button-nextProcess',
                nextPageID:'24',
                typeID:'2',
                view:'offerspec.ModCheck',
                actionId:'offer-modCheck'
            }
        }
        ,
        stores: {
            offerInfos:{
                source:'{offerInfo}'
            }
        }
    },
    items:[
        {
            xtype:'container',
            layout:'hbox',
            items:[
                {
                    xtype: 'tabpanel',
                    ui:'mTabPanel',
                    reference: 'addTabPanel',
                    viewModel:{
                        stores:{
                            offerAndTemplate:{
                                source:'{testTemplate}'
                            }
                        }
                    },
                    flex:1,
                    border: true,
                    defaults: {
                        bodyPadding: 10,
                        scrollable: true,
                        closable: true,
                        border: false
                    },
                    items: [{
                        title: '模板1(2)',
                        icon: null,
                        glyph: 42,
                        xtype:'default.offerstructure'
                    }, {
                        title: '模板2(3)',
                        icon: null,
                        glyph: 70,
                        html: 'bbbbbbbbb'
                    }, {
                        title: '模板3(1)',
                        icon: null,
                        glyph: 86,
                        html: 'cccccccc'
                    }]
                },
         /**右边的操作面板**/
                {
                    xtype: 'panel',
                    //title:'批量操作',
                    header:false,
                    scrollable:true,
                    ui: 'mBasePanel',
                    border: true,
                    reference:'itemsModPanel',
                    height: 540,
                    flex:2,
                    margin:'0 0 0 10',
                    layout:{
                        layout:'vbox',
                        align:'stretch'},
                    items:[
                        /**公共修改区**/
                        {
                            xtype:'panel',
                            header:false,
                            scrollable:true,
                            maxHeight:450,
                            layout:{
                                layout:'vbox',
                                align:'stretch'
                            },

                           items:[
                            {
                                xtype:'component',
                                height: 50,
                                cls: 'containerBorder-bottom',
                                padding:10,
                                style:{
                                    'font-size':'14px',
                                    'background-color': '#40D0E0',
                                    color:'white'
                                },
                            html:'批量修改区--对当前模板中的所有销售品进行操作'
                        }, {
                                xtype:'container',
                                layout:'hbox',
                                margin:5,
                                height:50,
                                items:[
                                    {
                                        xtype:'component',
                                        html:'当前配置销售品',
                                        margin:5},
                                    {
                                        xtype:'combobox',
                                        store: [
                                            ['当前配置销售品','当前配置销售品'],
                                            ['单产品基础销售品模板','单产品基础销售品模板','1'],
                                            ['单产品套餐模板','单产品套餐模板','2'],
                                            ['多产品套餐模板','多产品套餐模板','3'],
                                            ['单产品附属销售品模板','单产品附属销售品模板','4'],
                                            ['多产品附属销售品模板','多产品附属销售品模板','5']
                                        ]
                                    }
                                ]
                            },
                         {
                                xtype:'container',
                                ui: 'mBasePanel',
                                width:500,
                                minHeight:200,
                                heigth:500,
                                margin: '10px',
                                scrollable:true,
                                style:{border:'1px solid #eee', 'margin-top': 10,
                                    padding: 10},
                                items:[{
                                    xtype: 'default.memberdependencyrelation'
                                }]

                        }]
                    },
                        /***单个销售品修改**/
                        {
                            xtype:'panel',
                            header:false,
                            scrollable:true,
                            maxHeight:400,
                            border:true,
                            layout:{
                                type:'vbox',
                                align: 'stretch'},
                            minHeight:200,
                            items:[
                                {
                                    xtype:'component',
                                    height:50,
                                    padding:10,
                                    style:{
                                        'font-size':'14px',
                                        'background-color': '#40D0E0',
                                        color:'white'
                                    },
                                    cls: 'containerBorder-bottom',
                                   html:'单个修改区--对当前模板中的所有销售品进行操作'

                            },
                                {
                                    xtype:'container',
                                    layout:'hbox',
                                    height:50,
                                    margin:5,
                                    items:[{
                                        html:'选择销售品单一修改',
                                        margin:5,
                                        xtype:'component'
                                    }, {
                                        xtype:'combobox',
                                        label:'选择销售品单一修改',
                                        store: [
                                            ['选择销售品单一修改','选择销售品单一修改'],
                                            ['单产品基础销售品模板','单产品基础销售品模板','1'],
                                            ['单产品套餐模板','单产品套餐模板','2'],
                                            ['多产品套餐模板','多产品套餐模板','3'],
                                            ['单产品附属销售品模板','单产品附属销售品模板','4'],
                                            ['多产品附属销售品模板','多产品附属销售品模板','5']
                                        ]
                                    },{
                                        xtype:'container',
                                        margin:'0 0 0 10',
                                        items:[{  xtype:'button',
                                            itemId:'ignoreModify',
                                            ui:'mBtn',
                                            text:'撤销修改',
                                            handler:'onIgnoreModify'}]
                                    }
                                    ]
                                },
                                {
                                    xtype:'component',
                                    html:'对当前销售品进行的修改单一修改将在这里显示。。。',
                                    cls: 'containerBorder-bottom containerBorder-top',
                                    height:50,
                                    padding:10

                                },
                              {

                                  xtype:'container',
                                  ui: 'mBasePanel',
                                  width:500,
                                  minHeight:200,
                                  margin: '10px',
                                  scrollable:true,
                                  style:{border:'1px solid #eee', 'margin-top': 10,
                                      padding: 10},
                                  items:[{
                                      xtype:'default.memberexclusionrelation'
                                  }]
                              }
                            ]
                        }
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
    ],
    initComponent:function(){
        debugger
        console.dir('sidndingndf:',this);
        Ext.apply(this, {
        });
        this.callParent()
    }
});

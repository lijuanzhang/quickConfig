/**
 * Created by Administrator on 2016/4/6.
 */
Ext.define('QuickConfig.view.component.default.OfferRelation', {
    extend: 'QuickConfig.view.component.Base',
    xtype: 'default.offerrelation',
    cls: 'offerspec-container',
    controller: 'offerrelation',
    requires: [
        'Ext.grid.feature.Grouping',
        'Ext.selection.CellModel'
    ],
    collapsible: true,
    //border: true,
    //height: 400,
    layout: 'column',
    scrollable:true,
    header:false,
    defaults: {
        columnWidth:0.5,
        margin:10,
        scrollable:true,
        height:200,
        minWidth:120,
        border:true,
        ui:'mBasePanel'
    },
    items: [{
         xtype:'gridpanel',
         header:false,
         reference:'packageRel',
         scrollable:true,
        plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 2})],
        bbar:['->',{
            text:'添加',
            itemId:'addRelationBtn',
            action:'addPackageRel',
            ui:'mBtn',
            handler:'addRelation'
        }],
        headerHide:true,
        //title: '销售品关系',
        store:{
            type:'offerrelation',
            filters: [
                function(item) {
                    return item.data.relationTypeId == 1;
                }
            ]
        },
        resizable: true,
        columns:[{
            text: '销售品包',
            flex: 1,
            dataIndex: 'name',
            editor:{allowBlank:false}
        }]
    },
        {
            xtype:'gridpanel',
            header:false,
            reference:'groupRel',
            scrollable:true,
            plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 1})],
            bbar:['->',{
                text:'添加',
                itemId:'addRelationBtn',
                action:'addGroupRel',
                ui:'mBtn',
                handler:'addRelation'
            }],
            headerHide:true,
            //title: '销售品关系',
            store:{
                type:'offerrelation',
                filters: [
                    function(item) {
                        return item.data.relationTypeId ==2;
                    }
                ]
            },
            resizable: true,
            columns:[{
                text: '销售品组',
                flex: 1,
                dataIndex: 'name',
                editor:{allowBlank:false}
            }]
        },
        {
            xtype:'gridpanel',
            reference:'dependencyRel',
            scrollable:true,
            bbar:['->',{
                text:'添加',
                itemId:'addRelationBtn',
                action:'addDependencyRel',
                ui:'mBtn',
                handler:'addRelation'
            }],
            //minHeight: 200,
            title: '依赖关系',
            store:{
                type:'offerrelation',
                filters: [
                    function(item) {
                        return item.data.relationTypeId ==3;
                    }
                ]
            },
            resizable: true,
            columns:[{
                text: '销售品包',
                flex: 1,
                dataIndex: 'name'
            }]
        },
        {
            xtype:'gridpanel',
            reference:'memberDependencyRel',
            scrollable:true,
            bbar:['->',{
                text:'添加',
                itemId:'addRelationBtn',
                action:'addMemberDependencyRel',
                ui:'mBtn',
                handler:'addRelation'
            }],
            //minHeight: 200,
            title: '成员依赖关系',
            store:{
                type:'offerrelation',
                filters: [
                    function(item) {
                        return item.data.relationTypeId ==4;
                    }
                ]
            },
            resizable: true,
            columns:[
                {
                    text: '成员对象',
                    flex: 1,
                    dataIndex: 'member'
                },{
                text: '销售品组',
                flex: 1,
                dataIndex: 'name'
            }]
        },
        {
            xtype:'gridpanel',
            reference:'exclusionRel',
            scrollable:true,
            bbar:['->',{
                text:'添加',
                itemId:'addRelationBtn',
                action:'addExclusionRel',
                ui:'mBtn',
                handler:'addRelation'
            }],
            title: '互斥关系',
            store:{
                type:'offerrelation',
                filters: [
                    function(item) {
                        return item.data.relationTypeId ==5;
                    }
                ]
            },
            resizable: true,
            columns:[{
                text: '销售品组',
                flex: 1,
                dataIndex: 'name'
            }]
        },
        {
            xtype:'gridpanel',
            reference:'memberExclusionRel',
            scrollable:true,
            bbar:['->',{
                text:'添加',
                itemId:'addRelationBtn',
                action:'addMemberExclusionRel',
                ui:'mBtn',
                handler:'addRelation'
            }],
            title: '成员互斥关系',
            store:{
                type:'offerrelation',
                filters: [
                    function(item) {
                        return item.data.relationTypeId ==6;
                    }
                ]
            },
            resizable: true,
            columns:[{
                text: '成员对象',
                flex: 1,
                dataIndex: 'member'
            },{
                text: '销售品组',
                flex: 1,
                dataIndex: 'name'
            }]
        }]
})
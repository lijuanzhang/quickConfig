/**
 * Created by Administrator on 2016/4/25.
 */
Ext.define('QuickConfig.view.component.default.offerrelation.OfferRelation', {
    extend: 'Ext.grid.Panel',
    xtype: 'default.offerrelation',
    relationType:'offerRelation',
    scrollable:true,
    controller:'relation',
    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 2})],
    bbar:['->',{
        text:'添加',
        itemId:'addRelationBtn',
        action:'addOfferRelation',
        ui:'mBtn',
        handler:'addRelation'
    }],
    minHeight: 200,
    //title: '成员依赖关系',
    store:{
        type:'offerrelation',
        filters: [
            function(item) {
                return item.data.relationTypeId ==4;
            }
        ]
    },
    resizable: true,
    columns:[{
            text: '销售品组',
            flex: 1,
            dataIndex: 'name'
        },{
        xtype: 'actioncolumn',
        width: 30,
        sortable: false,
        columnLines: true,
        //flex:1,
        menuDisabled: true,
        items: [{
            iconCls: 'cell-editing-delete-row',
            tooltip: 'Delete',
            //scope: this,
            handler: 'onRemoveClick'
        }]
    }
    ]
})
/**
 * Created by Administrator on 2016/4/25.
 */
Ext.define('QuickConfig.view.component.default.offerrelation.MemberExclusionRelation', {
    extend: 'Ext.grid.Panel',
    //extend: 'QuickConfig.view.container',
    minHeight: 200,
    controller:'relation',
    xtype: 'default.memberexclusionrelation',
    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 2})],
    scrollable:true,
    bbar:['->',{
        text:'添加',
        itemId:'addRelationBtn',
        action:'addMemberExclusionRelation',
        ui:'mBtn',
        handler:'addRelation'
    }],
    //minHeight: 200,
    //title: '成员依赖关系',
    store:{
        type:'offerrelation',
        filters: [
            function(item) {
                return item.data.relationTypeId ==6;
            }
        ]
    },
    resizable: true,
    columnLines: true,
    columns:[
        {
            text: '成员对象',
            flex: 1,
            dataIndex: 'member',
            editor:{allowBlank:false}
        },{
            text: '销售品组',
            flex: 1,
            dataIndex: 'name',
            editor:{allowBlank:false}
        },
        {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            //flex:1,
            menuDisabled: true,
            items: [{
                iconCls: 'cell-editing-delete-row',
                tooltip: 'Delete',
                //scope: this,
                handler: 'onRemoveClick'
            }]
        }]
})
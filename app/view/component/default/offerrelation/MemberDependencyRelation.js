/**
 * Created by Administrator on 2016/4/25.
 */
Ext.define('QuickConfig.view.component.default.offerrelation.MemberDependencyRelation', {
    extend: 'Ext.grid.Panel',
    //extend: 'QuickConfig.view.container',
    xtype: 'default.memberdependencyrelation',
    relationType:'memberDependency',
    controller:'relation',
    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 1})],
    scrollable:true,
    bbar:['->',{
        text:'添加',
        itemId:'addRelationBtn',
        action:'addMemberDependencyRelation',
        ui:'mBtn',
        handler:'addRelation'
    }],
    minHeight: 200,
    columnLines: true,
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
            text:'删除',
            menuDisabled: true,
            items: [{
                iconCls: 'cell-editing-delete-row',
                tooltip: 'Delete',
                //scope: this,
                handler: 'onRemoveClick'
            }]
        }]
})
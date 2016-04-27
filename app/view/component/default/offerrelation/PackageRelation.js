/**
 * Created by Administrator on 2016/4/25.
 */
Ext.define('QuickConfig.view.component.default.offerrelation.PackageRelation', {
    extend: 'Ext.grid.Panel',
    relationType:'packageRelation',
    minHeight: 200,
    controller:'relation',
    xtype: 'default.packagerelation',
    scrollable:true,
    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 2})],
    bbar:['->',{
        text:'添加',
        itemId:'addRelationBtn',
        action:'addPackageRelation',
        ui:'mBtn',
        handler:'addRelation'
    }],
    //minHeight: 200,
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
    columnLines: true,
    columns:[
       {
            text: '建包关系',
            flex: 1,
            dataIndex: 'name'
        },{
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
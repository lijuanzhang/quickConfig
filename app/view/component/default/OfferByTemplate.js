/**
 * Created by Administrator on 2016/4/22.
 */

Ext.define('QuickConfig.view.component.default.OfferByTemplatePanel', {
    extend: 'Ext.grid.Panel',
    //alias:'',
    requires: [
        'Ext.selection.CellModel',
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.form.*'
    ],
    addBtnName:'添加一行',
    xtype: 'offerbytemplatepanel',
    reference:'OfferByTemplatePanel',
    border: true,
    plugins:{ptype: 'cellediting', clicksToEdit: 1},
    bind:'{offerByTemplate}',
    //store:{type:'favouriteOffer'},
    viewConfig: {
        emptyText: '点击【添加】按钮开始',
        deferEmptyText: false
    },
    initComponent: function() {
        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
        });
        Ext.apply(this, {
            columns: [{
                header: '模板名称',
                dataIndex: 'name',
                flex: 2,
                editor:new Ext.form.field.ComboBox({
                    typeAhead: true,
                    triggerAction: 'all',
                    store: [
                        ['单产品基础销售品模板','单产品基础销售品模板','1'],
                        ['单产品套餐模板','单产品套餐模板','2'],
                        ['多产品套餐模板','多产品套餐模板','3'],
                        ['单产品附属销售品模板','单产品附属销售品模板','4'],
                        ['多产品附属销售品模板','多产品附属销售品模板','5']
                    ]
                })
            },{
                header: '销售品数量',
                dataIndex: 'description',
                flex: 1,
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 1,
                    maxValue: 500
                }
            },{
                header: '选择销售品复制',
                dataIndex: 'view',
                flex: 2,
                editor: new Ext.form.field.ComboBox({
                    typeAhead: true,
                    triggerAction: 'all',
                    store: [
                        ['销售品A','销售品A','1'],
                        ['销售品B','销售品B','2'],
                        ['销售品C','销售品C','3'],
                        ['销售品D','销售品D','4'],
                        ['销售品E','销售品E','5']
                    ]
                })
            },{
                xtype: 'actioncolumn',
                width: 30,
                sortable: false,
                flex:1,
                menuDisabled: true,
                items: [{
                    iconCls: 'cell-editing-delete-row',
                    tooltip: 'Delete',
                    scope: this,
                    handler: this.onRemoveClick
                }]
            }],
            selModel: {
                type: 'cellmodel'
            },
            tbar: [{
                text: '添加',
                itemId:'addRowBtn',
                scope: this,
                ui:'mBtn',
                handler: this.onAddClick
            }]

        });

        this.callParent();

        if (Ext.supports.Touch) {
            this.addDocked({
                xtype: 'header',
                title: '<b>Note that cell editing is not recommeded on keyboardless touch devices.</b>'
            });
        }

        this.on('afterlayout', this.loadStore, this, {
            delay: 1,
            single: true
        });
    },

    loadStore: function() {
        this.getStore().load();
    },

    onAddClick: function(){
        // Create a model instance
        var store = this.getStore();
        store.add({id:store.count()+1});
    },

    onRemoveClick: function(grid, rowIndex){
        this.getStore().removeAt(rowIndex);
    }
});
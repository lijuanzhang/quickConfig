Ext.define('QuickConfig.view.offerspec.MModTable', {
    extend: 'Ext.container.Container',
    xtype: 'mmodtable',
    id: 'offerspecmmodtable',
    viewModel:{
        data: {
            cells: [
                {
                    html: 'Cell A content',
                    rowspan: 2
                },
                {
                    html: 'Cell B content',
                    colspan: 2
                },
                {
                    html: 'Cell C content',
                    cellCls: 'highlight'
                },
                {
                    html: 'Cell D content'
                }
            ]
        }
    },
    layout: {
        type: 'table',
        columns: 2,
        frame: true,
        tableAttrs: {
            style: {
                width: '100%',
                border: 0
            }
        },
        tdAttrs: {
            style: {
                border: 0
                //'background-color':'yellow'
            }
        }
    },
    scrollable: true,

    defaults: {
        bodyPadding: '15 20',
        border: false,
        'background-color': 'yellow'
    },
    items:[{html:'test'}],
    /**
     * initComponent
     *
     initComponet:function(){
     var me = this;
     me.items=this.getViewModel().getData().cells;
     //me.initItems();
     me.callParent();
     }
     */
    beforeRender:function(){
        debugger;
        var me = this;
        me.items=this.getViewModel().getData().cells;
        me.initItems();
        me.callParent();
    }

})
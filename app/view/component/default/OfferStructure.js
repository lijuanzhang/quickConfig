/**
 * Created by Administrator on 2016/4/25.
 */
Ext.define('QuickConfig.view.component.OfferStructure', {
    extend: 'QuickConfig.view.component.Base',
    //extend: 'QuickConfig.view.container',
    height: 500,
    xtype: 'default.offerstructure',
    controller:'offerstructure',
    title: '销售品信息结构',
    ui: 'mBasePanel',
    margin: '0 0 20 0',
    //flex: 1,
    scrollable: true,
    //maxHeight: 500,
    border: true,
    items: [
        {
        xtype: 'container',
        //flex: 2,
        margin: '0 0 0 5',
        height: 40,
        items: [{
            xtype: 'textfield',
            hideLabel: false,
            emptyText: '搜索',
            listeners: {
                //click:'onSearchClick',
                change: 'onSearchChange'
            }
        }]
    },{
        xtype: 'container',
        cls: 'containerBorder-bottom',
        layout: 'hbox',
        height:40,
        items: [
            {
            xtype: 'container',
            //flex: 2,
            margin: '0 0 0 5',
            items: [{
                xtype: 'textfield',
                hideLabel: false,
                itemId:'newName',
                reference:'newName',
                emptyText: '新增节点名称'
                //listeners: {
                //    //click:'onSearchClick',
                //    change: 'onSearchChange'
                //}
            }]
        }, {
            xtype: 'container',
            //flex: 1,
            margin: '0 0 0 5',
            items: [{
                xtype: 'button',
                ui: 'mBtn',
                text: '添加新节点',
                itemId : 'addNew',
                id : 'addNew',
                listeners: {
                    click: 'onAddNewItem'
                }
            }]
        }]
    },

    {
        xtype: 'treepanel',
        header: false,
        ui: 'mBasePanel',
        border: true,
        reference: 'attrsTree',
        rootVisible: false,
        store: {type: 'OfferInfo'},
        title: '销售品信息结构',
        height: 400,
        lines: false
    }
    ]}
)
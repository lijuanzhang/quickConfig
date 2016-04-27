Ext.define('QuickConfig.view.offerspec.OfferListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.offerlist',
    actionToTypeId:{
        'addPackageRel':1,
        'addGroupRel':2,
        'addDependencyRel':3,
        'addMemberDependencyRel':4,
        'addExclusionRel':5,
        'addMemberExclusionRel':6
    },
    addRelation: function(btn,e,opt) {
        debugger;
        var action = btn.action;
        var grid = btn.up('gridpanel');
        var store = grid.getStore();
        store.add({id:store.count()+1,relationTypeId:this.actionToTypeId[action]});
        //this.fireEvent('actionchange', option);
    },
    onRecentlyConfig:function(clickedPanel, record, tr, rowIndex, e, eOpts){
        var panel = this.getView();
        var panelName = panel.getName();
        if(panelName != 'requires' ){
            return ;
        }
        if(!panel.getAction ){
            console.error('需求列表没有配置action')
        }
        this.redirectTo('offerForRequire');
    }
});

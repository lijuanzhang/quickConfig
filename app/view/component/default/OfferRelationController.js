Ext.define('QuickConfig.view.offerspec.OfferRelationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.offerrelation',
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
    }
});

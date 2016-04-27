Ext.define('QuickConfig.view.offerspec.OfferRelationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.relation',
    actionToTypeId:{
        'addPackageRelation':1,
        'addOfferRelation':2,
        'addOfferDependencyRelation':3,
        'addMemberDependencyRelation':4,
        'addOfferExclusionRelation':5,
        'addMemberExclusionRelation':6
    },
    addRelation: function(btn,e,opt) {
        var action = btn.action;
        var grid = btn.up('gridpanel');
        var store = grid.getStore();
        /***不能设ID**/
        //store.add({id:store.getTotalCount()+1,relationTypeId:this.actionToTypeId[action]});
        store.add({relationTypeId:this.actionToTypeId[action]});
        //this.fireEvent('actionchange', option);
    },
    //删除当前行
    onRemoveClick:function(grid, rowIndex){
        this.getView().getStore().removeAt(rowIndex);
    }
});

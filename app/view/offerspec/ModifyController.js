/**
 * Created by Administrator on 2016/3/23.
 */
Ext.define('QuickConfig.view.main.ModifyControllers', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.offerModify',
    listen: {
        //controller: {
        //    '*': {
        //        nextProcess: 'nextProcess'
        //    }
        //},
        component: {
            'radiogroup[reference=modifyTypeRG]': {
                change: 'onModifyTypeChange'
            },
            'gridpanel[reference=offersSearchGrid]': {
                select: 'onSelect',
                deselect: 'onDeselect'
            },

            'button[name=nextProcess]':{
                click: 'nextProcess'
            }
        }
    },
    onModifyTypeChange: function (el, newValue, oldValue, options) {
        debugger;
        var offerModifyContain = el.findParentByType('offerspecmodify');
        var offerViewModel = offerModifyContain.getViewModel();
        offerViewModel.set("modifyType", newValue.modifytype);

        offerViewModel.set("selectedOffersTitle", offerViewModel.get("selectedOffersText." + newValue.modifytype));
        //销售品选择模式的改变
        offerModifyContain.lookupReference('offersSearchGrid').getSelectionModel().setSelectionMode(newValue.modifytype);
        //this.getView().lookupReference('offersSearchGrid').getSelectionModel().setSelectionMode(newValue.modifytype);
    },
    onSelectionChang: function (el, selected, eOpts) {
        var selectStore = this.getView().lookupReference('selectedOffers').getStore();
        if (selectStore.find('id', selected[0].id) < 0) {
            selectStore.add(selected);
        }
        else {
            selectStore.remove(selected);
        }
    },
    onDeselect: function (el, selected, eOpts) {
        var selectStore = this.getView().lookupReference('selectedOffers').getStore();
        selectStore.remove(selected);

    },
    onSelect: function (el, recored, index, Opts) {
        var selectStore = this.getView().lookupReference('selectedOffers').getStore();
        selectStore.add(recored);
    },
    nextProcess:function(el, opts){
        debugger;
        var option = this.getViewModel().getData().nextPage;
        option.selectedOffers =  this.getView().lookupReference('selectedOffers').getStore();
        this.fireEvent('actionchange', option);
    }
})
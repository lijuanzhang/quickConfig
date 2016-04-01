/**
 * Created by Administrator on 2016/3/29.
 */

Ext.define('QuickConfig.view.main.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.add',
    listen: {
        component: {
            'button[name=nextProcess]':{
                click: 'nextProcess'
            }
        }
    },
    getViewByRef:function(curControl,ref){
        return curControl.getView().lookupReference(ref);
    },


    //
    onItemclick: function (el, record, item, index, e,options) {
        debugger
        console.log(el);
        var raw = record.raw;
        //如果是叶节点， 更新 销售品取值面板
        if(this.isLeaf(record)){
            attType = raw.type;
            //更新 销售品取值面板
            this.refreshItemsModPanel(attType);
        }
    },
    nextProcess:function(el, opts){
        debugger;
        var option = this.getViewModel().getData().nextPage;
        //option.selectedOffers =  this.getViewByRef(this,"itemsModPanel").down('mtextfield').getData();

        this.fireEvent('actionchange', option);
    }
})
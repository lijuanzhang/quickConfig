/**
 * Created by Administrator on 2016/3/25.
 */

Ext.define('QuickConfig.view.main.ModCheckController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.modcheck',
    listen: {
        component: {
            'button[name=nextProcess]':{
                click: 'nextProcess'
            },
            'button[name=backToMod]':{
                click: 'backToPreCard'
            }
        }
    },
    getViewByRef:function(curControl,ref){
        return curControl.getView().lookupReference(ref);
    },


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
        this.fireEvent('actionchange', option);
    },
    backToPreCard:function(el, opts){
        debugger;
        var option = this.getViewModel().getData().prePage;
        this.fireEvent('actionchange', option);
    }
})
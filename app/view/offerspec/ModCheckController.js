/**
 * Created by Administrator on 2016/3/25.
 */

Ext.define('QuickConfig.view.main.ModCheckController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.modcheck',
    listen: {
        component: {
            'button[name=submit]':{
                click: 'onContinue'
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
    },
    onContinue:function(btn, e, eOpts){
        Ext.Msg.alert('提交','提交成功');
       //alert('提交成功');
        var actionId='offer-start',view='offerspec.Start';
        var option ={
            actionId:actionId,
            view:view
        }
        this.fireEvent('actionchange',option);
    }
})
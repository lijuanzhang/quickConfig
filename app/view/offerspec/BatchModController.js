/**
 * Created by Administrator on 2016/3/25.
 */

Ext.define('QuickConfig.view.main.BatchModController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.batchmod',
    listen: {
        component: {
            'treepanel[reference=attrsTree]': {
                itemclick: 'onItemclick'
            },
            'panel[reference=itemsModPanel]': {
                edit: 'onOfferAbbrEdit'
            },

            'button[name=nextProcess]':{
                click: 'nextProcess'
            }
        }
    },
    getViewByRef:function(curControl,ref){
        return curControl.getView().lookupReference(ref);
    },

    isLeaf:function(record){
        return record.raw.leaf;
    },
    refreshItemsModPanel:function(attrType){
        console.log("refreshItemsModPanel");
        var randomValue = '新销售品属性值'+ Math.round((Math.random()*100));
        //前台模拟使用,更新属性值面板
        this.setItemsModPanelValue(attrType,randomValue);

    },
    //前台模拟使用,更新属性值面板
    setItemsModPanelValue:function(attrType,randomValue){
        var data =  this.getViewByRef(this,'itemsModPanel').down('mtextfield').getData();
        debugger
        for (var i in data){
            var item = data [i];
            if(item[attrType]){
                item.value  = randomValue
            }
            else{
                item.value  = 'no defaut value';
            }
        }

        this.getViewByRef(this,'itemsModPanel').down('mtextfield').setData(data);
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

    onOfferAbbrEdit:function(){

    },
    nextProcess:function(el, opts){
        debugger;
        var option = this.getViewModel().getData().nextPage;
        this.fireEvent('actionchange', option);
    }

})
/**
 * Created by Administrator on 2016/3/29.
 */

Ext.define('QuickConfig.view.main.SaveController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.save',
    listen: {
        component: {
            'button[name=favour]':{
                click: 'addMyfavour'
            },
            'button[name=continue]':{
                click: 'onContinue'
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
    addMyfavour:function(el, opts){
        //debugger;
        console.log('getStore:',Ext.getStore("favouriteOffer"));
        var myFavours  = Ext.getStore("favouriteOffer");
        myFavours.add( {name: '新增',code: 'newTest',
            description: 'for测试测试',
            favouritetime :'9/1 12:00am',
            view: 'Manufacturing'});
        Ext.Msg.alert('收藏','s收藏成功，已添加至收藏列表！')
    },
    onContinue:function(btn, e, eOpts){
        var actionId='offer-start',view='offerspec.Start';
        var option ={
            actionId:actionId,
            view:view
        }
        this.fireEvent('actionchange',option);
    }

    //onContinue:function(btn, e, eOpts){
    //    debugger;
    //    var option ={ actionId:'offer-start',view:'offerspec.Start'};
    //    var actionId='offer-start',view='offerspec.Start';
    //    //this.fireEvent('goHome',option);
    //    var mainView =  this.getView().findParentByType('mainviewport');
    //    var  newView;
    //    var mainCard = mainView.down('offerspecmain');
    //    var existItem =  mainCard.child('component[actionId = '+actionId+']');
    //    if(existItem){
    //       newView = existItem;
    //    }
    //    else{
    //         newView = Ext.create('QuickConfig.view.' + (view || 'pages.Error404Window'), {
    //            hideMode: 'offsets',
    //             actionId:actionId
    //        });
    //        mainView.add(newView);
    //    }
    //    var viewModel  = mainView.getViewModel();
    //    var  vmData = viewModel.getData();
    //    vmData.curView = newView;
    //    var mainLayout = mainCard.getLayout();
    //    Ext.suspendLayouts();
    //    mainLayout.setActiveItem(newView);
    //    Ext.resumeLayouts(true);
    //}
})
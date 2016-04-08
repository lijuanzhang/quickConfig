/**
 * Created by Administrator on 2016/3/25.
 */

Ext.define('QuickConfig.view.main.OfferCompositionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.offercomposition',
    listeners: {
        click: {
            element: 'input#test', //bind to the underlying el property on the panel
            fn: function(){ console.log('dblclick body')}
        },
        //click: {
    //    element: 'div', //bind to the underlying el property on the panel
    //        fn: function(){ console.log('dblclick body')}
    //},
        focus: {
        element: 'input[name=test]', //bind to the underlying el property on the panel
        fn: function(){ console.log('elment body')}
    }
    },
        //,
        //dblclick: {
        //    element: 'body', //bind to the underlying body property on the panel
        //    fn: function(){ console.log('dblclick body'); }
        //}
    //},
    listen: {
        component: {
            'label[name=test]': {
                click: 'onAddMember'
            },
            'gridpanel[reference=offerCompositionGrid]': {
                click:function(){ console.log('dblclick body')}
            },
           'textfield[name=addMember]':{
               keydown:function(){ console.log('dblclick body')},
               focus:'onAddMember',
               clice: function(){ console.log('dblclick bod click')}

           },
            'button[name=addMember]':{
               click:'onAddMember'
           },
            'button[name=nextProcess]':{
                click:function(){ console.log('nextprocess')}
            }
        }
    },
    nextProcess:function(el, opts){
        debugger;
        var option = this.getViewModel().getData().nextPage;
        //option.selectedOffers =  this.getViewByRef(this,"itemsModPanel").down('mtextfield').getData();
        this.fireEvent('actionchange', option);
    },
    onAddMember:function(el,opts){
        debugger;
        var offerCompostion = this.lookupReference('offerCompositionGrid');
        var compositionStore = offerCompostion.getStore();
        var total = compositionStore.count();
        var newOffer = {id:total+1};
        compositionStore.add(newOffer);
    }
})
///**销售品tabPanel数据模型转化**/
///***
// * operator:add ,modify,batchAdd
// * offer:{}{}复制的销售品信息
// * offerAndTemplate：销售品模板
// */
//Ext.define("OfferTabpanel",{
//    config: {
//        operation: '',
//        offer: [],
//        offerAndTemplate: [],
//        reference:'OfferTabpanel',
//        num:0
//    },
//    constructor: function (config) {
//        thi1s.initConfig(config);
//    },
//    getTabReference:function(){
//        return this.operation?this.operation+this.reference:this.reference;
//    },
//    getTabItems:function(){
//        if(!offerAndTemplate.length){
//            return []
//        }
//        var tabItems=[]; title: '模板1(2)',
//            icon: null,
//            glyph: 42,
//            xtype:'default.offerstructure'
//        var tab ={};
//        /**
//         * 根据模板和销售品的信息生成tapPanel的item
//         */
//        offerAndTemplate.each(function(item){
//            if(!item.name){
//                return;
//            }
//            tab.title =(item.name||'')+'('+item.name(item.num||0)+')';
//            tab.xtype = 'default.offerstructure';
//            tab.offersInfo = this.randomName(item.offer)
//
//        })
//    }
//})
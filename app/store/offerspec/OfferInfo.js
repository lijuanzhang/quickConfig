/**
* Created by Administrator on 2016/3/24.
*/
Ext.define('QuickConfig.store.offerspec.OfferInfo', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.OfferInfo',
    root: {
        text: '销售品信息',
        expanded: true,
        children: [
            {
                text: '基本信息',
                children: [
                    { leaf:true, text: '名称',type:'name' },
                    { leaf:true, text: '编码',type:'code' }
                ]
            },
            {
                text: '类型',
                expanded: true,
                children: [
                    { leaf:true, text: '类型1' },
                    { leaf:true, text: '类型2' },
                    { leaf:true, text: '类型3' }
                ]
            },
            {
                text: '产品构成',
                children: [
                    { leaf:true, text: '构成1' },
                    { leaf:true, text: '构成2' },
                    { leaf:true, text: '构成2' }
                ]
            },
            {
                text: '销售品关系',leaf:true
            },
            {
                text: '销售品属性',
                children: [
                    { leaf:true, text: '月租' },
                    { leaf:true, text: '指定生效时间' }
                ]
            },
            {
                text: '配置要求',
                children: [
                    { leaf:true, text: '要求1' },
                    { leaf:true, text: '要求2' },
                    { leaf:true, text: '要求3' }
                ]
            },
            { leaf:true, text: '售卖条件' }
        ]}
});
//requires: [
//    'QuickConfig.model.tree.OfferSpecify',
//    'QuickConfig.model.tree.OfferAbbr'
//],
//
//model: 'QuickConfig.model.tree.OfferInfo',
//
//proxy: {
//    type: 'ajax',
//    reader: {
//        type: 'json',
//        typeProperty: 'mtype'
//    },
//    url: '/QuickConfig/OfferInfo'
//},
//
//lazyFill: false
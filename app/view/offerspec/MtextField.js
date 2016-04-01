/**
* Created by Administrator on 2016/3/24.
*/
Ext.define('QuickConfig.view.offerspec.MtextField', {
    extend: 'Ext.container.Container',
    xtype: 'mtextfield',
    tpl: '<div class="mformfieldContainer">' +
    '<tpl for=".">' +
    '<div class = "mtxtField"> ' +
    '<div style = "width:100px;display: inline-block"><label class = "mLabelClass">{name}</label> </div>' +
       ' <tpl if="value==-1">'+
       '<input type=text name="mValue" disabled class = mInputClass value ="******" />'+
        '<tpl else>'+
        '<input type=text name="mValue"  class = mInputClass value ="{value}"/>' +
        '</tpl>' +
    ' </div>' +
    '</tpl>' +
    '</div>',
    data: [],

    hasValue: function(name) {
        return (name != undefined || name != null);
    }
});

/**
* Created by Administrator on 2016/3/24.
*/
Ext.define('QuickConfig.view.offerspec.MtextField', {
    extend: 'Ext.container.Container',
    xtype: 'mtextfield',
    tpl: '<div class="mformfieldContainer">' +
    '<tpl for=".">' +
    '<div class = "mtxtField form-columnlayout-item" > ' +
    '<div style = "width:150px;display: inline-block;text-align: right"><label class = "mLabelClass">{name}</label> </div>' +
       '<div style="border:1px solid #d0d0d0;display: inline-block; margin-left: 20px;" >'+
       ' <tpl if="value==-1">'+
       ' <input type=text name="mValue" disabled class = mInputClass value ="******" />'+
        '<tpl else>'+
        '<input type=text name="mValue"  class = mInputClass value ="{value}"/>' +
        '</tpl>' +
        '</div> ' +
    ' </div>' +
    '</tpl>' +
    '</div>',
    data: [],

    hasValue: function(name) {
        return (name != undefined || name != null);
    }
});

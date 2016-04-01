/**
 * Created by Administrator on 2016/3/17.
 */
Ext.define('QuickConfig.store.offerspec.TemplateType', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.templateType',
    model: 'QuickConfig.model.offerspec.TemplateType',
    data: [
        [0,  'e家套模板',                                    'e家'],
        [1,  '主副卡套餐模板',                                   '主副卡']
    ]
});

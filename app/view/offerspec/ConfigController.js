/**
 * Created by Administrator on 2016/4/5.
 */
Ext.define('QuickConfig.view.offerspec.ConfigController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.config',
    onConfigNext: function() {
        var option = {
            actionId: 'offer-addCheck',
            view: 'offerspec.AddCheck'
        };
        this.fireEvent('actionchange', option);
    }
});

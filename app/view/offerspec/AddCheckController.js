/**
 * Created by Administrator on 2016/3/29.
 */

Ext.define('QuickConfig.view.main.AddCheckController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addcheck',
    listen: {
        component: {
            'button[name=submit]':{
                click: 'nextProcess'
            }
        }
    },
    getViewByRef:function(curControl,ref){
        return curControl.getView().lookupReference(ref);
    },

    nextProcess:function(el, opts){
        debugger;
        var option = this.getViewModel().getData().nextPage;
        this.fireEvent('actionchange', option);
    }
})
Ext.define('QuickConfig.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        iconCls: 'fa fa-home',
        text:   '主页',
        children: [
            {
                text:   '销售品管理',
                view:   'offerspec.Offerspec',
                iconCls: 'fa fa-desktop',
                routeId: 'dashboard',
                expanded: true,
                children: [
                    {
                        text: '销售品配置',
                        view: 'offerspec.Offerspec',
                        leaf: true,
                        //iconCls: 'fa fa-file-o',
                        routeId:'offerspec.Offerspec'
                    },

                    {
                        text: '销售品组配置',
                        view: 'pages.Error404Window',
                        leaf: true,
                        //iconCls: 'fa fa-exclamation-triangle',
                        routeId:'pages.404'
                    },
                    {
                        text: '销售品包配置',
                        view: 'pages.Error500Window',
                        leaf: true,
                        //iconCls: 'fa fa-times-circle',
                        routeId:'pages.500'
                    },
                    {
                        text: '销售品权限配置',
                        view: 'authentication.LockScreen',
                        leaf: true,
                        //iconCls: 'fa fa-lock',
                        routeId:'authentication.lockscreen'
                    }
                ]
            },
            {
                text:   '活动管理',
                view:   'email.Email',
                iconCls: 'right-icon hot-icon x-fa fa-send ',
                leaf:   true,
                routeId: 'email'

            },
            {
                text:   '基础参数配置',
                view:   'widgets.Widgets',
                leaf:   true,
                iconCls: 'x-fa fa-flask',
                routeId:'widgets'
            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});

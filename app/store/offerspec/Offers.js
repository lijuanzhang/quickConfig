/**
 * Created by Administrator on 2016/3/18.
 */
Ext.define('QuickConfig.store.offerspec.Offers', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.offers',
    model: 'QuickConfig.model.offerspec.Offers',

    data: [
        [0,  '乐享189套餐',  '123' ,'主套餐','成都' ,'2016-01-01',   '在售'   ,''                     ],
        [1,  'e8-129',  '123',   '主套餐', '成都'   ,    '2016-01-01',   '在售'   ,''                      ],
        [2,  '元包100M流量包',  '123',   '可选包', '成都'   ,    '2016-01-01',   '在售'   ,''                      ],
        [3,  'e8-华为Mate8终端促销',  '123',   '促销', '成都'   ,    '2016-01-01',   '在售'   ,''                      ],
        [4,  'e8-ss',  '123',   '主套餐', '成都'   ,    '2016-01-01',   '在售'   ,''                      ],
        [5,  'e8-ss',  '',   '主套餐', '成都'   ,    '2016-01-01',   '在售'   ,''                      ]
    ]
});
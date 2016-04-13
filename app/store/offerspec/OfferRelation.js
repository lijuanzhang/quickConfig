/**
 * Created by Administrator on 2016/3/18.
 */
Ext.define('QuickConfig.store.offerspec.OfferRelation', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.offerrelation',
    model: 'QuickConfig.model.offerspec.OfferRelation',
    sorters: [{
        property: 'relationType',
        direction: 'ASC'
    }],
    data: [
        [5,  '销售品包关系',1,  '销售品组1',  '', 'aaa'           ],
        [4,  '销售品组关系', 2, '销售品包1', '',  'bbb'         ],
        [0,  '依赖关系',  3,'销售品组2' ,'','ccc'    ],
        [2,  '成员依赖关系',4,  '销售品组4',   '成员对象1',    '1111'            ],
        [1,  '互斥关系', 5, '销售品组3',  '', 'dddd'         ],

        [3,  '成员互斥关系', 6, '销售品组5',   '成员对象2'   ,     '2222'             ]
    ]
});
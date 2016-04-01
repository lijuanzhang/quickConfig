Ext.define('QuickConfig.data.OfferInfo', {
    requires: [
        'QuickConfig.data.Init'
    ]
}, function() {
    Ext.ux.ajax.SimManager.register({
        '/QuickConfig/OfferInfo': {
            type: 'json',
            data: {
                children: [{
                    mtype: 'OfferInfo',
                    name: 'North America',
                    children :[{
                        mtype: 'OfferAbbr',
                        name: 'USA',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Redwood City',
                            leaf: true
                        }, {
                            mtype: 'City',
                            name: 'Frederick, MD',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Canada',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Vancouver',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Toronto',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Mexico',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Mexico City',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Chihuahua',
                            leaf: true
                        }]
                    }]
                }, {
                    mtype: 'Territory',
                    name: 'Europe, ME, Africa',
                    children :[{
                        mtype: 'OfferAbbr',
                        name: 'England',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Nottingham',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'London',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Netherlands',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Amsterdam',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Haaksbergen',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Italy',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Ferrara',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Milan',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Kenya',
                        children: [{
                            mtype: 'OfferSpecifyOfferSpecify',
                            name: 'Kampala',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Croatia',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Split',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Dubrovnik',
                            leaf: true
                        }]
                    }]
                }, {
                    mtype: 'Territory',
                    name: 'South America, Caribbean',
                    children :[{
                        mtype: 'OfferAbbr',
                        name: 'Brazil',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Rio de Janeiro',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Brasilia',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Argentina',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Buenos Aires',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Chile',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Santiago',
                            leaf: true
                        }]
                    }]
                }, {
                    mtype: 'Territory',
                    name: 'Central and South Asia',
                    children :[{
                        mtype: 'OfferAbbr',
                        name: 'Russian Federation',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Moscow',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Yekaterinburg',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'India',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Mumbai',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Bangalore',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Kazakhstan',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Astana',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Turkmenistan',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Ashgabat',
                            leaf: true
                        }]
                    }]
                }, {
                    mtype: 'Territory',
                    name: 'East Asia and Pacific',
                    children :[{
                        mtype: 'OfferAbbr',
                        name: 'Australia',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Sydney',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Canberra',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'China',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Beijing',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Chengdu',
                            leaf: true
                        }]
                    }, {
                        mtype: 'OfferAbbr',
                        name: 'Japan',
                        children: [{
                            mtype: 'OfferSpecify',
                            name: 'Tokyo',
                            leaf: true
                        }, {
                            mtype: 'OfferSpecify',
                            name: 'Osaka',
                            leaf: true
                        }]
                    }]
                }]
            }
        }
    });
});

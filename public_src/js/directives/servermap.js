/**
 * Created by pheadra on 6/11/15.
 */
angular.module('app')
    .directive('servermap', ['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
        return {
            restrict: 'E',
            template:'<div id="servermap" style="position:fixed;top:120px;left:220px;right:0;bottom:0"></div>',
            link: function(scope, el, attrs) {
                var sampleData, options;
                sampleData = {
                    "applicationMapData": {
                        "nodeDataArray": [
                            {
                                "key": "FRONT-WEB^USER",
                                "applicationName": "USER",
                                "category": "USER",
                                "fig": "Ellipse",
                                "serviceTypeCode": "2",
                                "terminal": "false",
                                "isWas": false,
                                "infoTable": [
                                    {k: 'TPS', v: '100,000'},
                                    {k: 'Calls', v: '300,000'},
                                    {k: 'Load', v: '50%'}
                                ],
                                "histogram": {"1s": 634, "3s": 5, "5s": 0, "Slow": 0, "Error": 203},
                                "agentHistogram": {},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "agentTimeSeriesHistogram": {},
                                "serverList": {}
                            },

                            {
                                "key": "MySQL^MYSQL",
                                "applicationName": "MySQL (DATABASE)",
                                "category": "MYSQL",
                                "fig": "RoundedRectangle",
                                "serviceTypeCode": "2101",
                                "terminal": "true",
                                "isWas": false,
                                "infoTable": [
                                    {k: 'TPS', v: '2,000,000'},
                                    {k: 'Load', v: '90%'}
                                ],
                                "histogram": {"1s": 867, "3s": 0, "5s": 0, "Slow": 0, "Error": 0},
                                "agentHistogram": {"10.25.141.69:3306": {"1s": 867, "3s": 0, "5s": 0, "Slow": 0, "Error": 0}},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "agentTimeSeriesHistogram": {
                                    "10.25.141.69:3306": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "serverList": {
                                    "10.25.141.69": {
                                        "name": "10.25.141.69",
                                        "status": null,
                                        "instanceList": {
                                            "10.25.141.69:3306": {
                                                "name": "10.25.141.69:3306",
                                                "category": "MYSQL_EXECUTE_QUERY",
                                                "agentInfo": null,
                                                "hasInspector": false
                                            }
                                        }
                                    }
                                }
                            },

                            {
                                "key": "BACKEND-API^TOMCAT",
                                "applicationName": "BACKEND-API",
                                "category": "TOMCAT",
                                "fig": "RoundedRectangle",
                                "serviceTypeCode": "1010",
                                "terminal": "false",
                                "isWas": true,
                                "histogram": {"1s": 59, "3s": 0, "5s": 0, "Slow": 0, "Error": 249},
                                "agentHistogram": {"ApiWAS1": {"1s": 59, "3s": 0, "5s": 0, "Slow": 0, "Error": 249}},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "agentTimeSeriesHistogram": {
                                    "ApiWAS1": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "serverList": {
                                    "dev-pinpoint-workload003.ncl.nhnsystem.com": {
                                        "name": "dev-pinpoint-workload003.ncl.nhnsystem.com",
                                        "status": null,
                                        "instanceList": {
                                            "ApiWAS1": {
                                                "name": "ApiWAS1",
                                                "category": "TOMCAT",
                                                "agentInfo": {
                                                    "hostname": "dev-pinpoint-workload003.ncl.nhnsystem.com",
                                                    "ip": "10.101.55.85",
                                                    "ports": "",
                                                    "agentId": "ApiWAS1",
                                                    "applicationName": "BACKEND-API",
                                                    "category": "TOMCAT",
                                                    "pid": 20531,
                                                    "version": "1.0.2-SNAPSHOT",
                                                    "startTime": 1396492780257,
                                                    "endTimeStamp": 0,
                                                    "endStatus": 0
                                                },
                                                "hasInspector": true
                                            }
                                        }
                                    }
                                }
                            },

                            {
                                "key": "FRONT-WEB^TOMCAT",
                                "applicationName": "FRONT-WEB",
                                "category": "TOMCAT",
                                "fig": "RoundedRectangle",
                                "serviceTypeCode": "1010",
                                "terminal": "false",
                                "isWas": true,
                                "histogram": {"1s": 634, "3s": 5, "5s": 0, "Slow": 0, "Error": 203},
                                "agentHistogram": {
                                    "FrontWAS2": {"1s": 333, "3s": 2, "5s": 0, "Slow": 0, "Error": 106},
                                    "FrontWAS1": {"1s": 301, "3s": 3, "5s": 0, "Slow": 0, "Error": 97}
                                },
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "agentTimeSeriesHistogram": {
                                    "FrontWAS1": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ], "FrontWAS2": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "serverList": {
                                    "dev-pinpoint-workload001.ncl.nhnsystem.com": {
                                        "name": "dev-pinpoint-workload001.ncl.nhnsystem.com",
                                        "status": null,
                                        "instanceList": {
                                            "FrontWAS1": {
                                                "name": "FrontWAS1",
                                                "category": "TOMCAT",
                                                "agentInfo": {
                                                    "hostname": "dev-pinpoint-workload001.ncl.nhnsystem.com",
                                                    "ip": "10.101.55.177",
                                                    "ports": "",
                                                    "agentId": "FrontWAS1",
                                                    "applicationName": "FRONT-WEB",
                                                    "category": "TOMCAT",
                                                    "pid": 17005,
                                                    "version": "1.0.2-SNAPSHOT",
                                                    "startTime": 1396492730774,
                                                    "endTimeStamp": 0,
                                                    "endStatus": 0
                                                },
                                                "hasInspector": true
                                            },
                                            "FrontWAS2": {
                                                "name": "FrontWAS2",
                                                "category": "TOMCAT",
                                                "agentInfo": {
                                                    "hostname": "dev-pinpoint-workload001.ncl.nhnsystem.com",
                                                    "ip": "10.101.55.177",
                                                    "ports": "",
                                                    "agentId": "FrontWAS2",
                                                    "applicationName": "FRONT-WEB",
                                                    "category": "TOMCAT",
                                                    "pid": 16962,
                                                    "version": "1.0.2-SNAPSHOT",
                                                    "startTime": 1396492726314,
                                                    "endTimeStamp": 0,
                                                    "endStatus": 0
                                                },
                                                "hasInspector": true
                                            }
                                        }
                                    }
                                }
                            },

                            {
                                "id": "MEMCACHED^MEMCACHED",
                                "key": "MEMCACHED^MEMCACHED",
                                "applicationName": "MEMCACHED",
                                "category": "MEMCACHED",
                                "fig": "Rectangle",
                                "serviceTypeCode": "8050",
                                "terminal": "true",
                                "isWas": false,
                                "histogram": {"100ms": 340, "300ms": 0, "500ms": 0, "Slow": 0, "Error": 0},
                                "agentHistogram": {
                                    "10.25.149.80:11211": {
                                        "100ms": 103,
                                        "300ms": 0,
                                        "500ms": 0,
                                        "Slow": 0,
                                        "Error": 0
                                    },
                                    "10.25.149.79:11211": {"100ms": 116, "300ms": 0, "500ms": 0, "Slow": 0, "Error": 0},
                                    "10.25.149.80:11244": {"100ms": 121, "300ms": 0, "500ms": 0, "Slow": 0, "Error": 0}
                                },
                                "timeSeriesHistogram": [
                                    {
                                        "key": "100ms", "values": []
                                    },
                                    {
                                        "key": "300ms", "values": []
                                    },
                                    {
                                        "key": "500ms", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "agentTimeSeriesHistogram": {
                                    "10.25.149.79:11211": [
                                        {
                                            "key": "100ms", "values": []
                                        },
                                        {
                                            "key": "300ms", "values": []
                                        },
                                        {
                                            "key": "500ms", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ], "10.25.149.80:11211": [
                                        {
                                            "key": "100ms", "values": []
                                        },
                                        {
                                            "key": "300ms", "values": []
                                        },
                                        {
                                            "key": "500ms", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ], "10.25.149.80:11244": [
                                        {
                                            "key": "100ms", "values": []
                                        },
                                        {
                                            "key": "300ms", "values": []
                                        },
                                        {
                                            "key": "500ms", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "serverList": {
                                    "10.25.149.79": {
                                        "name": "10.25.149.79",
                                        "status": null,
                                        "instanceList": {
                                            "10.25.149.79:11211": {
                                                "name": "10.25.149.79:11211",
                                                "category": "MEMCACHED",
                                                "agentInfo": null,
                                                "hasInspector": false
                                            }
                                        }
                                    },
                                    "10.25.149.80": {
                                        "name": "10.25.149.80",
                                        "status": null,
                                        "instanceList": {
                                            "10.25.149.80:11244": {
                                                "name": "10.25.149.80:11244",
                                                "category": "MEMCACHED",
                                                "agentInfo": null,
                                                "hasInspector": false
                                            },
                                            "10.25.149.80:11211": {
                                                "name": "10.25.149.80:11211",
                                                "category": "MEMCACHED",
                                                "agentInfo": null,
                                                "hasInspector": false
                                            }
                                        }
                                    }
                                }
                            },

                            {
                                "id": "BACKEND-WEB^USER",
                                "key": "BACKEND-WEB^USER",
                                "applicationName": "USER",
                                "category": "USER",
                                "fig": "Ellipse",
                                "serviceTypeCode": "2",
                                "terminal": "false",
                                "isWas": false,
                                "histogram": {"1s": 251, "3s": 0, "5s": 0, "Slow": 0, "Error": 0},
                                "agentHistogram": {},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "agentTimeSeriesHistogram": {},
                                "serverList": {}
                            },
                            {
                                "id": "BACKEND-WEB^TOMCAT",
                                "key": "BACKEND-WEB^TOMCAT",
                                "applicationName": "BACKEND-WEB",
                                "category": "TOMCAT",
                                "fig": "RoundedRectangle",
                                "serviceTypeCode": "1010",
                                "terminal": "false",
                                "isWas": true,
                                "histogram": {"1s": 513, "3s": 0, "5s": 0, "Slow": 0, "Error": 46},
                                "agentHistogram": {"BackendWAS1": {"1s": 513, "3s": 0, "5s": 0, "Slow": 0, "Error": 46}},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "agentTimeSeriesHistogram": {
                                    "BackendWAS1": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "serverList": {
                                    "dev-pinpoint-workload002.ncl.nhnsystem.com": {
                                        "name": "dev-pinpoint-workload002.ncl.nhnsystem.com",
                                        "status": null,
                                        "instanceList": {
                                            "BackendWAS1": {
                                                "name": "BackendWAS1",
                                                "category": "TOMCAT",
                                                "agentInfo": {
                                                    "hostname": "dev-pinpoint-workload002.ncl.nhnsystem.com",
                                                    "ip": "10.101.52.71",
                                                    "ports": "",
                                                    "agentId": "BackendWAS1",
                                                    "applicationName": "BACKEND-WEB",
                                                    "category": "TOMCAT",
                                                    "pid": 18010,
                                                    "version": "1.0.2-SNAPSHOT",
                                                    "startTime": 1396492762904,
                                                    "endTimeStamp": 0,
                                                    "endStatus": 0
                                                },
                                                "hasInspector": true
                                            }
                                        }
                                    }
                                }
                            }
                        ], "linkDataArray": [
                            {
                                "id": "BACKEND-WEB^USER~BACKEND-WEB^TOMCAT",
                                "from": "BACKEND-WEB^USER",
                                "to": "BACKEND-WEB^TOMCAT",
                                "sourceInfo": {
                                    "applicationName": "BACKEND-WEB",
                                    "category": "USER",
                                    "serviceTypeCode": 2,
                                    "isWas": false
                                },
                                "targetInfo": {
                                    "applicationName": "BACKEND-WEB",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "filterApplicationName": "BACKEND-WEB",
                                "filterApplicationServiceTypeCode": 1010,
                                "totalCount": 251,
                                "error": 0,
                                "slow": 0,
                                "histogram": {"1s": 251, "3s": 0, "5s": 0, "Slow": 0, "Error": 0},
                                "sourceHistogram": {},
                                "targetHistogram": {},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "sourceTimeSeriesHistogram": {},
                                "category": "default"
                            },

                            {
                                "id": "FRONT-WEB^USER~FRONT-WEB^TOMCAT",
                                "from": "FRONT-WEB^USER",
                                "to": "FRONT-WEB^TOMCAT",
                                "sourceInfo": {
                                    "applicationName": "FRONT-WEB",
                                    "category": "USER",
                                    "serviceTypeCode": 2,
                                    "isWas": false
                                },
                                "targetInfo": {
                                    "applicationName": "FRONT-WEB",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "filterApplicationName": "FRONT-WEB",
                                "filterApplicationServiceTypeCode": 1010,
                                "totalCount": 842,
                                "error": 203,
                                "slow": 0,
                                "histogram": {"1s": 634, "3s": 5, "5s": 0, "Slow": 0, "Error": 203},
                                "sourceHistogram": {},
                                "targetHistogram": {},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "sourceTimeSeriesHistogram": {},
                                "category": "default"
                            },
                            {
                                "id": "BACKEND-API^TOMCAT~MySQL^MYSQL",
                                "from": "BACKEND-API^TOMCAT",
                                "to": "MySQL^MYSQL",
                                "sourceInfo": {
                                    "applicationName": "BACKEND-API",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "targetInfo": {
                                    "applicationName": "MySQL",
                                    "category": "MYSQL",
                                    "serviceTypeCode": 2101,
                                    "isWas": false
                                },
                                "filterApplicationName": "BACKEND-API",
                                "filterApplicationServiceTypeCode": 1010,
                                "totalCount": 308,
                                "error": 0,
                                "slow": 0,
                                "histogram": {"1s": 308, "3s": 0, "5s": 0, "Slow": 0, "Error": 0},
                                "sourceHistogram": {"ApiWAS1": {"1s": 308, "3s": 0, "5s": 0, "Slow": 0, "Error": 0}},
                                "targetHistogram": {"10.25.141.69:3306": {"1s": 308, "3s": 0, "5s": 0, "Slow": 0, "Error": 0}},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "sourceTimeSeriesHistogram": {
                                    "ApiWAS1": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "category": "default"
                            },
                            {
                                "id": "FRONT-WEB^TOMCAT~MEMCACHED^MEMCACHED",
                                "from": "FRONT-WEB^TOMCAT",
                                "to": "MEMCACHED^MEMCACHED",
                                "sourceInfo": {
                                    "applicationName": "FRONT-WEB",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "targetInfo": {
                                    "applicationName": "MEMCACHED",
                                    "category": "MEMCACHED",
                                    "serviceTypeCode": 8050,
                                    "isWas": false
                                },
                                "filterApplicationName": "FRONT-WEB",
                                "filterApplicationServiceTypeCode": 1010,
                                "totalCount": 340,
                                "error": 0,
                                "slow": 0,
                                "histogram": {"100ms": 340, "300ms": 0, "500ms": 0, "Slow": 0, "Error": 0},
                                "sourceHistogram": {
                                    "FrontWAS2": {"100ms": 192, "300ms": 0, "500ms": 0, "Slow": 0, "Error": 0},
                                    "FrontWAS1": {"100ms": 148, "300ms": 0, "500ms": 0, "Slow": 0, "Error": 0}
                                },
                                "targetHistogram": {
                                    "10.25.149.80:11244": {
                                        "100ms": 121,
                                        "300ms": 0,
                                        "500ms": 0,
                                        "Slow": 0,
                                        "Error": 0
                                    },
                                    "10.25.149.79:11211": {"100ms": 116, "300ms": 0, "500ms": 0, "Slow": 0, "Error": 0},
                                    "10.25.149.80:11211": {"100ms": 103, "300ms": 0, "500ms": 0, "Slow": 0, "Error": 0}
                                },
                                "timeSeriesHistogram": [
                                    {
                                        "key": "100ms", "values": []
                                    },
                                    {
                                        "key": "300ms", "values": []
                                    },
                                    {
                                        "key": "500ms", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "sourceTimeSeriesHistogram": {
                                    "FrontWAS1": [
                                        {
                                            "key": "100ms", "values": []
                                        },
                                        {
                                            "key": "300ms", "values": []
                                        },
                                        {
                                            "key": "500ms", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ], "FrontWAS2": [
                                        {
                                            "key": "100ms", "values": []
                                        },
                                        {
                                            "key": "300ms", "values": []
                                        },
                                        {
                                            "key": "500ms", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "category": "default"
                            },

                            {
                                "id": "FRONT-WEB^TOMCAT~BACKEND-WEB^TOMCAT",
                                "from": "FRONT-WEB^TOMCAT",
                                "to": "BACKEND-WEB^TOMCAT",
                                "sourceInfo": {
                                    "applicationName": "FRONT-WEB",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "targetInfo": {
                                    "applicationName": "BACKEND-WEB",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "filterApplicationName": "FRONT-WEB",
                                "filterApplicationServiceTypeCode": 1010,
                                "filterTargetRpcList": [
                                    {"rpc": "dev-pinpoint-workload002.ncl:8080", "rpcServiceTypeCode": 9050}
                                ],
                                "totalCount": 308,
                                "error": 0,
                                "slow": 0,
                                "histogram": {"1s": 308, "3s": 0, "5s": 0, "Slow": 0, "Error": 0},
                                "sourceHistogram": {
                                    "FrontWAS2": {"1s": 174, "3s": 0, "5s": 0, "Slow": 0, "Error": 0},
                                    "FrontWAS1": {"1s": 134, "3s": 0, "5s": 0, "Slow": 0, "Error": 0}
                                },
                                "targetHistogram": {
                                    "dev-pinpoint-workload002.ncl:8080": {
                                        "1s": 308,
                                        "3s": 0,
                                        "5s": 0,
                                        "Slow": 0,
                                        "Error": 0
                                    }
                                },
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "sourceTimeSeriesHistogram": {
                                    "FrontWAS1": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ], "FrontWAS2": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "category": "default"
                            },
                            {
                                "id": "BACKEND-WEB^TOMCAT~BACKEND-API^TOMCAT",
                                "from": "BACKEND-WEB^TOMCAT",
                                "to": "BACKEND-API^TOMCAT",
                                "sourceInfo": {
                                    "applicationName": "BACKEND-WEB",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "targetInfo": {
                                    "applicationName": "BACKEND-API",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "filterApplicationName": "BACKEND-WEB",
                                "filterApplicationServiceTypeCode": 1010,
                                "filterTargetRpcList": [
                                    {"rpc": "dev-pinpoint-workload003.ncl:8080", "rpcServiceTypeCode": 9050}
                                ],
                                "totalCount": 57,
                                "error": 46,
                                "slow": 0,
                                "histogram": {"1s": 11, "3s": 0, "5s": 0, "Slow": 0, "Error": 46},
                                "sourceHistogram": {"BackendWAS1": {"1s": 11, "3s": 0, "5s": 0, "Slow": 0, "Error": 46}},
                                "targetHistogram": {
                                    "dev-pinpoint-workload003.ncl:8080": {
                                        "1s": 11,
                                        "3s": 0,
                                        "5s": 0,
                                        "Slow": 0,
                                        "Error": 46
                                    }
                                },
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "sourceTimeSeriesHistogram": {
                                    "BackendWAS1": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "category": "default"
                            },

                            {
                                "id": "BACKEND-WEB^TOMCAT~MySQL^MYSQL",
                                "from": "BACKEND-WEB^TOMCAT",
                                "to": "MySQL^MYSQL",
                                "sourceInfo": {
                                    "applicationName": "BACKEND-WEB",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "targetInfo": {
                                    "applicationName": "MySQL",
                                    "category": "MYSQL",
                                    "serviceTypeCode": 2101,
                                    "isWas": false
                                },
                                "filterApplicationName": "BACKEND-WEB",
                                "filterApplicationServiceTypeCode": 1010,
                                "totalCount": 559,
                                "error": 0,
                                "slow": 0,
                                "histogram": {"1s": 559, "3s": 0, "5s": 0, "Slow": 0, "Error": 0},
                                "sourceHistogram": {"BackendWAS1": {"1s": 559, "3s": 0, "5s": 0, "Slow": 0, "Error": 0}},
                                "targetHistogram": {"10.25.141.69:3306": {"1s": 559, "3s": 0, "5s": 0, "Slow": 0, "Error": 0}},
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "sourceTimeSeriesHistogram": {
                                    "BackendWAS1": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "category": "default"
                            },
                            {
                                "id": "FRONT-WEB^TOMCAT~BACKEND-API^TOMCAT",
                                "from": "FRONT-WEB^TOMCAT",
                                "to": "BACKEND-API^TOMCAT",
                                "isFiltered": true,
                                "sourceInfo": {
                                    "applicationName": "FRONT-WEB",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "targetInfo": {
                                    "applicationName": "BACKEND-API",
                                    "category": "TOMCAT",
                                    "serviceTypeCode": 1010,
                                    "isWas": true
                                },
                                "filterApplicationName": "FRONT-WEB",
                                "filterApplicationServiceTypeCode": 1010,
                                "filterTargetRpcList": [
                                    {"rpc": "dev-pinpoint-workload003.ncl:8080", "rpcServiceTypeCode": 9050}
                                ],
                                "totalCount": 251,
                                "error": 203,
                                "slow": 0,
                                "histogram": {"1s": 48, "3s": 0, "5s": 0, "Slow": 0, "Error": 203},
                                "sourceHistogram": {
                                    "FrontWAS2": {"1s": 26, "3s": 0, "5s": 0, "Slow": 0, "Error": 106},
                                    "FrontWAS1": {"1s": 22, "3s": 0, "5s": 0, "Slow": 0, "Error": 97}
                                },
                                "targetHistogram": {
                                    "dev-pinpoint-workload003.ncl:8080": {
                                        "1s": 48,
                                        "3s": 0,
                                        "5s": 0,
                                        "Slow": 0,
                                        "Error": 203
                                    }
                                },
                                "timeSeriesHistogram": [
                                    {
                                        "key": "1s", "values": []
                                    },
                                    {
                                        "key": "3s", "values": []
                                    },
                                    {
                                        "key": "5s", "values": []
                                    },
                                    {
                                        "key": "Slow", "values": []
                                    },
                                    {
                                        "key": "Error", "values": []
                                    }
                                ],
                                "sourceTimeSeriesHistogram": {
                                    "FrontWAS1": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ], "FrontWAS2": [
                                        {
                                            "key": "1s", "values": []
                                        },
                                        {
                                            "key": "3s", "values": []
                                        },
                                        {
                                            "key": "5s", "values": []
                                        },
                                        {
                                            "key": "Slow", "values": []
                                        },
                                        {
                                            "key": "Error", "values": []
                                        }
                                    ]
                                },
                                "category": "default"
                            }
                        ]
                    }
                };
                var self = this;
                options = {
                    "sContainerId": 'servermap',
                    "sImageDir": '/img/servermap/',
                    "htLinkType": {
                        "sRouting": "Normal", // Normal, Orthogonal, AvoidNodes
                        "sCurve": "JumpGap" // Bezier, JumpOver, JumpGap
                    },
                    "fOnNodeClicked" :  function (eMouseEvent, htData) {
                        //self.transitionTo("/app/dashboard");
                        console.log('test');
                    }
                };
                oServerMap = new ServerMap(options);
                oServerMap.load(sampleData.applicationMapData);
            }
        };
    }]);
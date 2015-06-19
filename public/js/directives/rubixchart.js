/**
 * Created by pheadra on 6/17/15.
 */
angular.module('app')
    .directive('realtimechart', ['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
        return {
            restrict: 'E',
            template:'<div class="row">\n    <div class="col-lg-12">\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div id="webrequest"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="row">\n    <div class="col-lg-6">\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div id="tmu"></div>\n            </div>\n        </div>\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div id="sqm"></div>\n            </div>\n        </div>\n    </div>\n    <div class="col-lg-6">\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div id="crom"></div>\n            </div>\n        </div>\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div id="diam"></div>\n            </div>\n        </div>\n      \n    </div>\n</div>\n',
            link: function(scope, el, attrs) {
                var t = 0,
                    v = 100;



                (function() {
                    var chart = new Rubix('#webrequest', {
                        title: 'Web Request',
                        subtitle: 'Request Count',
                        width: '100%',
                        height: 200,
                        tooltip: {
                            color: '#0054A9',
                            format: {
                                x: '.0f',
                                y: '.0f'
                            }
                        }
                    });
                    chart.callAxis();
                    var line = chart.line_series({
                        name: 'Series A',
                        color: '#0054A9'
                    });



                    var time = 0,  v = 100;

                    var realtime = function() {
                        return {
                            x: ++time,
                            y: v = ~~Math.max(10, Math.min(40, v + 10 * (Math.random() - .5)))
                        };
                    };
                    var data = d3.range(50).map(realtime);
                    line.addData(data);

                    this.interval = setInterval(function() {
                        line.addPoint(realtime(), true);
                    }, 3000);
                })();


                (function() {
                    var chart = new Rubix('#tmu', {
                        title: 'Active Users',
                        subtitle: 'Active Users',
                        width: '100%',
                        height: 200,
                        tooltip: {
                            color: '#0054A9',
                            format: {
                                x: '.0f',
                                y: '.0f'
                            }
                        }
                    });
                    chart.callAxis();
                    var line = chart.line_series({
                        name: 'Series A',
                        color: '#0054A9'
                    });




                    var time = 0,  v = 100;

                    var realtime = function() {
                        return {
                            x: ++time,
                            y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
                        };
                    };
                    var data = [{"x":1,"y":1},{"x":2,"y":1},{"x":3,"y":1},{"x":4,"y":1},{"x":5,"y":1},{"x":6,"y":1},{"x":7,"y":1},{"x":8,"y":1},{"x":9,"y":2},{"x":10,"y":2}];


                    //var data = d3.range(100).map(realtime);
                    line.addData(data);

                    //this.interval = setInterval(function() {
                    //    line.addPoint(realtime(), true);
                    //}, 2500);
                })();

                (function() {
                    var chart = new Rubix('#crom', {
                        title: 'Active Service',
                        subtitle: 'Active Service',
                        width: '100%',
                        height: 200,
                        tooltip: {
                            color: '#0054A9',
                            format: {
                                x: '.0f',
                                y: '.0f'
                            }
                        }
                    });
                    chart.callAxis();
                    var line = chart.line_series({
                        name: 'Series A',
                        color: '#0054A9'
                    });


                    var time = 0,  v = 100;

                    var realtime = function() {
                        return {
                            x: ++time,
                            y: v = ~~Math.max(10, Math.min(20, v + 10 * (Math.random() - .5)))
                        };
                    };
 //                   var data = d3.range(100).map(realtime);
                    var data = [{"x":1,"y":0},{"x":2,"y":1},{"x":3,"y":1},{"x":4,"y":1},{"x":5,"y":1},{"x":6,"y":1},{"x":7,"y":1},{"x":8,"y":1},{"x":9,"y":0},{"x":10,"y":0}];

                    line.addData(data);


                    //this.interval = setInterval(function() {
                    //    line.addPoint(realtime(), true);
                    //}, 2500);
                })();


                (function() {
                    var genChart = function(id, symbol, color, subtitle) {
                        var chart = new Rubix(id, {
                            height: 200,
                            title: subtitle,
                            titleColor: color,
                            axis: {
                                x: {
                                    tickCount: 4
                                }
                            },
                            tooltip: {
                                color: color,
                                format: {
                                    x: '.0f',
                                    y: '.0f'
                                }
                            },
                            show_markers: true
                        });

                        var line = chart.line_series({
                            name: symbol,
                            color: color,
                            marker: symbol
                        });

                        var t = 0,
                            v = 100;
                        var next = function() {
                            return {
                                x: ++t,
                                y: v = ~~Math.max(10, Math.min(30, v + 10 * (Math.random() - .5)))
                            };
                        };
                        var data = d3.range(10).map(next);

                        line.addData(data);
                        this.interval = setInterval(function() {
                            line.addPoint(next(), true);
                        }, 3000);
                    };

                   // genChart('#cirm', 'circle' , 'green', 'Response Time');
                    //genChart('#crom', 'cross'  , '#9F00A7', 'Active Service');
                    genChart('#sqm' , 'square' , '#DA532C', 'Heap Memory');
                    genChart('#diam' , 'diamond' , '#00ABA9', 'TPS');
                    //genChart('#tmu' , 'triangle-up' , '#b91d47', 'Active Users');
                   // genChart('#tmd' , 'triangle-down' , '#2d89ef' ,'Call Count by Hours');
                })();
            }
        };
    }]).directive('rubixchart', ['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
    return {
        restrict: 'E',
        template:' <div id="txcount"></div>',
        link: function(scope, el, attrs) {
            var t = 0,
                v = 100;

            var next = function() {
                return {
                    x: ++t,
                    y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
                };
            };

            (function() {
                var chart = new Rubix('#txcount', {
                    title: 'Tx Count',
                    subtitle: 'Transaction Count',
                    width: '100%',
                    height: 200,
                    tooltip: {
                        color: '#0054A9',
                        format: {
                            x: '.0f',
                            y: '.0f'
                        }
                    }
                });
                chart.callAxis();
                var line = chart.line_series({
                    name: 'Series A',
                    color: '#0054A9'
                });

                var time = 0,  v = 100;

                var realtime = function() {
                    return {
                        x: ++time,
                        y: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
                    };
                };
           //     var data = d3.range(100).map(realtime);
                var data = [{"x":1,"y":2},{"x":2,"y":1},{"x":3,"y":1},{"x":4,"y":1},{"x":5,"y":0},{"x":6,"y":1},{"x":7,"y":1},{"x":8,"y":1},{"x":9,"y":0},{"x":10,"y":0}];
                line.addData(data);


                /*this.interval = setInterval(function() {
                    line.addPoint(realtime(), true);
                }, 2500);*/
            })();
        }
    };
}]);
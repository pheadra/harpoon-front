/**
 * Created by pheadra on 6/17/15.
 */
angular.module('app')
    .directive('errorcount', ['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
        return {
            restrict: 'E',
            template:'<div id="errorcount"></div>',
            link: function(scope, el, attrs) {
                var t = 0,
                    v = 100;



                (function() {
                    var chart = new Rubix('#errorcount', {
                        width: '100%',
                        height: 150,
                        title: 'Error Total Count',
                        subtitle: '',
                        titleColor: '#0054A9',
                        subtitleColor: '#0054A9',
                        tooltip: {
                            color: '#0054A9',
                            format: {
                                x: '.0f',
                                y: '.0f'
                            }
                        }
                    });

                    var line = chart.area_series({
                        name: 'Error',
                        color: '#0054A9'
                    });

                    var next = function() {
                        return {
                            x: ++t,
                            y:0
                        };
                    };
                    var data = d3.range(49).map(next);
                    data = d3.merge([data, d3.range(1).map(function() {
                        return {
                            x: ++t,
                            y: Math.round(Math.random() * 10)
                        }
                    })]);

                    console.log(JSON.stringify(data));

                    //var data = [{"x":1,"y":2},{"x":2,"y":1},{"x":3,"y":1},{"x":4,"y":1},{"x":5,"y":1},{"x":6,"y":1},{"x":7,"y":1},{"x":8,"y":1},{"x":9,"y":1},{"x":10,"y":1},{"x":11,"y":1},{"x":12,"y":1},{"x":13,"y":1},{"x":14,"y":1},{"x":15,"y":1},{"x":16,"y":1},{"x":17,"y":1},{"x":18,"y":1},{"x":19,"y":1},{"x":20,"y":1},{"x":21,"y":1},{"x":22,"y":1},{"x":23,"y":1},{"x":24,"y":1},{"x":25,"y":1},{"x":26,"y":1},{"x":27,"y":1},{"x":28,"y":1},{"x":29,"y":1},{"x":30,"y":1},{"x":31,"y":1},{"x":32,"y":1},{"x":33,"y":1},{"x":34,"y":1},{"x":35,"y":1},{"x":36,"y":1},{"x":37,"y":1},{"x":38,"y":1},{"x":39,"y":1},{"x":40,"y":1},{"x":41,"y":1},{"x":42,"y":1},{"x":43,"y":1},{"x":44,"y":1},{"x":45,"y":1},{"x":46,"y":1},{"x":47,"y":1},{"x":48,"y":1},{"x":49,"y":1},{"x":50,"y":1},{"x":51,"y":1},{"x":52,"y":1},{"x":53,"y":1},{"x":54,"y":1},{"x":55,"y":1},{"x":56,"y":1},{"x":57,"y":1},{"x":58,"y":1},{"x":59,"y":1},{"x":60,"y":1},{"x":61,"y":1},{"x":62,"y":1},{"x":63,"y":1},{"x":64,"y":1},{"x":65,"y":1},{"x":66,"y":1},{"x":67,"y":1},{"x":68,"y":1},{"x":69,"y":1},{"x":70,"y":1},{"x":71,"y":1},{"x":72,"y":1},{"x":73,"y":1},{"x":74,"y":1},{"x":75,"y":1},{"x":76,"y":1},{"x":77,"y":1},{"x":78,"y":1},{"x":79,"y":1},{"x":80,"y":1},{"x":81,"y":1},{"x":82,"y":1},{"x":83,"y":1},{"x":84,"y":1},{"x":85,"y":1},{"x":86,"y":1},{"x":87,"y":1},{"x":88,"y":1},{"x":89,"y":1},{"x":90,"y":1},{"x":91,"y":1},{"x":92,"y":1},{"x":93,"y":1},{"x":94,"y":1},{"x":95,"y":1},{"x":96,"y":1},{"x":97,"y":1},{"x":98,"y":1},{"x":99,"y":1},{"x":100,"y":1}];
                    line.addData(data);
                })();

            }
        };
    }]);
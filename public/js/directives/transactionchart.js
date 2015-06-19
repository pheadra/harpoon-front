/**
 * Created by pheadra on 6/17/15.
 */
/**
 * Created by pheadra on 6/17/15.
 */
angular.module('app')
    .directive('transcationchart', ['$rootScope', '$anchorScroll', '$state', function($rootScope, $anchorScroll, $state) {
        return {
            restrict: 'E',
            template:'<div id="transcationchart"></div>',
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
                    var chart = new Rubix('#transcationchart', {
                        title: 'Transcation Chart View',
                        titleColor: 'steelblue',
                        subtitleColor: 'steelblue',
                        height: 500,
                        tooltip: {
                            color: 'steelblue',
                            format: {
                                x: '.0f',
                                y: '.0f'
                            }
                        },
                        show_markers: true
                    });

                    var scatter = chart.line_series({
                        name: 'Transcation',
                        color: 'steelblue',
                        marker: 'circle',
                        scatter: true
                    });

                    var t = 1,
                        v = 100,
                        data = d3.range(333).map(function() {
                            return {
                                x: ++t,
                                y: Math.round(Math.random() * 40)
                            }
                        });
                    data = d3.merge([data, d3.range(333).map(function() {
                        return {
                            x: ++t,
                            y: Math.round(Math.random() * 40)
                        }
                    })]);
                  /*  data = d3.merge([data, d3.range(333).map(function() {
                        return {
                            x: ++t,
                            y: Math.round(Math.random() * 100)
                        }
                    })]);*/
                    data[0] = {x:0, y: 0};
                    data.push({x: 0, y: 200});

                    scatter.addData(data);
                })();

                $("#transcationchart").dragToSelect({selectables: 'li',
                    onHide: function (selectBox) {
                        selectBox.hide();

                        $state.go('app.transactiondetail');
                        console.log(selectBox);
                    }
                });
            }
        };
    }]);
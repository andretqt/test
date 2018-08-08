
// if using require
const angular = require('angular');
const FusionCharts = require('fusioncharts');
const Charts = require('fusioncharts/fusioncharts.charts'); // Charts
Charts(FusionCharts);
require('angular-fusioncharts');

let myApp = angular.module('my-app', ['ng-fusioncharts']);
myApp.controller('MyController', ['$scope', function($scope) {
    $scope.myDataSource = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    }
}])
/* JavaScript Document */

(function() {
	var app = angular.module('myCalculator', []);

	app.controller('CalcCtrl', ['$scope', function($scope){
		
		$scope.lumen_options = [375, 600, 900, 1125, 1600];
		$scope.current_lumens = 375;

		$scope.current_cost = 12;
		$scope.current_hours = 3;
		$scope.total_days = 365;
	
		$scope.inc_conversion = 0.0625;
		$scope.hal_conversion = 0.0450;
		$scope.cfl_conversion = 0.0146;
		$scope.led_conversion = 0.0125

		$scope.calculate = function() {
			$scope.inc_wattage = ($scope.current_lumens * 	$scope.inc_conversion).toFixed(1);
			$scope.hal_wattage = ($scope.current_lumens * 	$scope.hal_conversion).toFixed(1);
			$scope.led_wattage = ($scope.current_lumens * 	$scope.led_conversion).toFixed(1);

			$scope.inc_price = 	($scope.inc_wattage * $scope.current_cost * $scope.current_hours).toFixed(1);
			$scope.hal_price = 	($scope.hal_wattage * $scope.current_cost * $scope.current_hours).toFixed(1);
			$scope.led_price = 	($scope.led_wattage * $scope.current_cost * $scope.current_hours).toFixed(1);


		}
			

		$scope.calculate();
	
	}]);	 

})();

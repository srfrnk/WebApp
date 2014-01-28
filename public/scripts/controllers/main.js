define("controllers/main", ["app"], function (app) {
	return app.controller("main", ["$scope","$translate","$translatePartialLoader", function ($scope,$translate,$translatePartialLoader) {
		$translatePartialLoader.addPart("main");
		angular.extend($scope, {
		});
	}]);
});
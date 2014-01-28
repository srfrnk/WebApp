define("controllers/someAction", ["app"], function (app) {
	return app.controller("someAction", ["$scope","$translate","$translatePartialLoader", function ($scope,$translate,$translatePartialLoader) {
		$translatePartialLoader.addPart("someAction");
		angular.extend($scope, {
		});
	}]);
});
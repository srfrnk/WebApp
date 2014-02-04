define("controllers/<%=nameCamel%>", ["app"], function (app) {
	return app.controller("<%=nameCamel%>", ["$scope","$translate","$translatePartialLoader", function ($scope,$translate,$translatePartialLoader) {
		$translatePartialLoader.addPart("<%=nameCamel%>");
		angular.extend($scope, {
		});
	}]);
});
define("controllers/otherAction", ["app", "directives/myDirective", "services/server"], function (app) {
	return app.controller("otherAction", ["$scope", "$translate", "$translatePartialLoader", "server", "$state", "createDialog",
		function ($scope, $translate, $translatePartialLoader, server, $state, createDialog) {
			$translatePartialLoader.addPart("otherAction");
			$translate.refresh();

			angular.extend($scope, {
			});
		}]);
});
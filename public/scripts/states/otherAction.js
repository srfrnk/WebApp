define("states/otherAction", ["app", "controllers/otherAction"], function (app) {
	return app.config(["$stateProvider", function ($stateProvider) {
		$stateProvider.state("otherAction", {
			url: "/other-action",
			templateUrl: "/view/otherAction",
			controller: "otherAction"
		});
	}]);
});
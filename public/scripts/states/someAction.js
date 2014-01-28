define("states/someAction", ["app", "controllers/someAction"], function (app) {
	return app.config(["$stateProvider", function ($stateProvider) {
		$stateProvider.state("someAction", {
			url: "/some-action",
			templateUrl: "/view/someAction",
			controller: "someAction"
		});
	}]);
});
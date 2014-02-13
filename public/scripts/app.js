define("app", [], function () {
	var app = angular.module("app", ["ngResource", "ui.router", "ui.bootstrap", "ui.router", "pascalprecht.translate","fundoo.services"]);
	app.config(["$locationProvider","$translateProvider","$translatePartialLoaderProvider",function ($locationProvider,$translateProvider,$translatePartialLoaderProvider) {
		$locationProvider.html5Mode(true);
		$translateProvider.useLoader('$translatePartialLoader', {
			urlTemplate: '/i18n/{lang}/{part}.json'
		});
		$translateProvider.preferredLanguage('en-US');
	}]);
	app.run(["$rootScope","$translate","$translatePartialLoader",function ($rootScope, $translate,$translatePartialLoader) {
		$translatePartialLoader.addPart("global");
		$translate.refresh();
	}]);
	return app;
});
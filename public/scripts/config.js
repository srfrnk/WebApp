require.config({
	baseUrl: "/scripts",
	deps: ["bootstrap"],
	paths: {
		'domReady': '/requirejs-domready/domReady'
	}
});
define("bootstrap", [
	"app",
	"states/main",
	"states/someAction",
	"states/anotherAction"
], function () {
	require(['domReady!'], function (document) {
		angular.bootstrap(document, ["app"]);
	});
});


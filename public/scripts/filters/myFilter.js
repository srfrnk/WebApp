define("filters/myFilter", ["app"], function (app) {
	return app.filter('map', function () {
		return function (input, arg1) {
			return input+":"+arg1;
		};
	});
});
define("filters/myFilter", ["app"], function (app) {
/*
        Usage:
            {{ innput | map:arg1 }}

    */
	return app.filter("map",[function () {
		return function (input, arg1) {
			return input+":"+arg1;
		};
	}]);
});
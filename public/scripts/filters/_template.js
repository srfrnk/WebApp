define("filters/<%=nameCamel%>", ["app"], function (app) {
	return app.filter('<%=nameCamel%>', function () {
		return function (input, arg1) {
			return input+":"+arg1;
		};
	});
});
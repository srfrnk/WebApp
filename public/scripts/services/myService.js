define("services/myService", ["app"], function (app) {
	return app.factory("myService", ["$resource",
		function ($resource) {
			var service = $resource("/data/:action", {}, {
				create: {
					method: "POST",
					params: { action: "create" }
				},
				getAll: {
					method: "GET",
					params: { action: "getAll" },
					isArray:true
				}
			});
			return {
				create: function (activity,cb) {
					return service.create(activity,cb);
				},
				getAll: function (cb) {
					return service.getAll({},cb);
				}
			};
		}
	]);
});

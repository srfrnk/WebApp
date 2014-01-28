define("directives/myDirective", ["app","linqjs", "services/myService"], function (app,Enumerable) {
	return app.directive('myDirective', ["myService", function (myService) {
		var data = Enumerable.From(myService.getAll());

		return {
			require: 'ngModel',
			link: function (scope, elm, attrs, ctrl) {
				var validation = attrs.validation;

				function validate(viewValue) {
					var value = scope.$eval(validation);
					if (!!value) {
						var firstMatch = data.First(function (item) {
							return item.name == value;
						});
						if (!!firstMatch) {
							ctrl.$setValidity("myValidation", true);
							return viewValue;
						}
					}
					ctrl.$setValidity("myValidation", false);
					return undefined;
				}

				ctrl.$parsers.push(validate);
				scope.$watch(validation, function () {
					validate(ctrl.$viewValue);
				});
			}
		};
	}]);
});

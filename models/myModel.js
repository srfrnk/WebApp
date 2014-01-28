require("requirejs").define("models/myModel", ["models/mongooseHelper"], function (mongooseHelper) {
	var mySchema, MyModel,myModel={};
	mongooseHelper.connected.then(function () {
		mySchema = mongooseHelper.mongoose.Schema({
			name: String,
			description: String,
			comments: String,
			createdAt: Date
		});
		MyModel = mongooseHelper.mongoose.model("MyModel", mySchema);
		myModel.MyModel=MyModel;
	});
	return myModel;
});

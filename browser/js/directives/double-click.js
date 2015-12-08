app.directive("doubleClick", function(){
	return {
		restrict: "A",
		scope: {
			doubleClick: "&"
		},
		link: function(scope, element){
			var clickElement = document.getElementById("row")
			clickElement.ondblclick = function(){
				scope.doubleClick();
			};
		}
	}
})
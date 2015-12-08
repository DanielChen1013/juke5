app.directive('albumList', function( ){
	return{
		restrict: 'E',
		templateUrl: "/templates/albumList.html",
		scope: {
            albums: '='
        },
	}
});

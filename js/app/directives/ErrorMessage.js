function ErrorMessage() {
	return {
		templateUrl: 'js/app/templates/errorMessage.html',
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);

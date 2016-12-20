function SuccessMessage() {
	return {
		templateUrl: 'js/app/templates/successMessage.html',
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);

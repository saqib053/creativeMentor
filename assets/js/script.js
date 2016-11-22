$(document).ready(function(){

	$('#pay-button').on('click', function(){
		 event.preventDefault();
   $('#start-lesson').removeAttr("disabled");
   $('#disabled-link').removeClass("disabledLink");
	})



});
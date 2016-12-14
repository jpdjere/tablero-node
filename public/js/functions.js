var toggleTablero = function(){
	var tableroDisplay = $('#tableroContainer').css('display');
	if(tableroDisplay === 'none'){
		$('#tableroContainer').css('display','block');
			$('#tableroFloatingHeader').css('display','block');
		$('#seriesContainer').css('display','none');
	}else{
		// $('#tableroContainer').css('display','block');
		// $('#seriesContainer').css('display','none');
	}
}

var toggleSeries = function(){
	var seriesDisplay = $('#seriesContainer').css('display');
	if(seriesDisplay === 'none'){
		$('#seriesContainer').css('display','block');
		$('#tableroContainer').css('display','none');
		$('#tableroFloatingHeader').css('display','none');
	}else{
		// $('#seriesContainer').css('display','block');
	}
}

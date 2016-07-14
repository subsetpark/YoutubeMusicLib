$(function(){
	$( ".datepicker" ).datepicker();
	/*
	$("#searchdates").on("submit", function(event) {
		event.preventDefault();
		console.log ($("#search_start_date").attr("value"));
		console.log($("#search_end_date").attr("value"));
		console.log($("#search_start_date").val());
		console.log($("#search_end_date").val());

		$.ajax({
				type: "GET",
			    url: '/listens',
			    data: {search_start_date: $("#search_start_date").val()
			    , search_end_date: $("#search_end_date").val()} //returns true or false
		    });
	});*/

	$("#updatelistens").on("submit", function(event) {
		event.preventDefault();
		index = 100;
		i = 0;

		$.each($(".row"), function(index, listen){
			if($("#library" + i.toString()).is(':checked')){
				library_value = 1
			}else{
				library_value = 0;
			}
			if($("#music" + i.toString()).is(':checked')){
				music_value = 1
			}else{
				music_value = 0;
			}
			$.ajax({
				type: "POST",
			    url: '/updatedata',
			    data: {youtube_id: $("#youtube_id" + i.toString()).attr("value")
			    , play: $("#play" + i.toString()).is(':checked') //returns true or false
			    , library: library_value
			    , music: music_value
			    , title: $("#title" + i.toString()).val()
			    , artist: $("#artist" + i.toString()).val()
			    , album: $("#album" + i.toString()).val()
			    , track_num: $("#track_num" + i.toString()).val()
				, release_date: $("#release_date" + i.toString()).val()
				, artist_id: $("#artist_id" + i.toString()).attr("value")
				, album_id: $("#album_id" + i.toString()).attr("value")}
		    });
		    i++;
		});
	});	
});


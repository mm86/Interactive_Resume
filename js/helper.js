/*
These are HTML strings.
*/
/* Banner 
   =================== */
var HTMLbannerImage = '<img src="%data%" alt="background image">';
var HTMLbannerName = '<h1>%data%</h1>';
var HTMLbannerMessage = '<h2>%data%</h2>';


/* About 
   =================== */

var HTMLaboutParagraph = '<p>%data%</p>';

/* Education 
   =================== */

var HTMLeducation = '<div class="education-entry"></div>';
var HTMLschoolGlyphicon = '<i class="glyphicon glyphicon-education"></i>';
var HTMLschoolName = '<h3>%data%</h3>';
var HTMLschoolMajor = '<h3>%data%</h3>';
var HTMLschoolDates = '<h3>%data%</h3>';
var HTMLschoolLocation = '<h3>%data%</h3>';

/* Work
   =================== */

var HTMLwork = '<div class="work-entry"></div>';
var HTMLworkGlyphicon = '<i class="glyphicon glyphicon-briefcase"></i>';
var HTMLworkCompany = '<h3>%data%</h3>';
var HTMLworkRole = '<h3>%data%</h3>';
var HTMLworkDates = '<h3>%data%</h3>';
var HTMLworkLocation = '<h3>%data%</h3>';
var HTMLworkDesc = '<p>%data%</p>';


/* Projects
   =================== */

var HTMLprojectDiv = '<div class="col-md-4"></div>';
var HTMLprojectImage = '<img src="%data%" alt="project image" width="250" height="250">';
var HTMLprojectTitle = '<h3>%data%</h3>';
var HTMLprojectDesc = '<p>%data%</p>';


/* Skills
   =================== */


var HTMLlist = '<li>%data%</li>';



/* Contact
   =================== */

var googleMap = '<div id="map"></div>';
var HTMLaddress = '<h3>%data%<h3>';
var HTMLnumber = '<h3>%data%<h3>';
var HTMLtwitter = '<h3>Twitter: %data%<h3>';
var HTMLgithub = '<h3>Github: %data%<h3>';
var HTMLemail = '<h3>%data%<h3>';




/*
Collecting click locations
*/
clickLocations = [];

function logClicks(x, y) {
	clickLocations.push({
		x: x,
		y: y
	});
	console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

	var locations;

	var mapOptions = {
		disableDefaultUI: true
	};

	// This next line makes `map` a new Google Map JavaScript Object and attaches it to
	// <div id="map">, which is appended as part of an exercise late in the course.
	map = new google.maps.Map(document.querySelector('#map'), mapOptions);


	/*
	locationFinder() returns an array of every location string from the JSONs
	written for bio, education, and work.
	*/
	function locationFinder() {

		var locations = [];
		// locations.push(bio.contacts.location);

		for (var i in education.schools) {
			locations.push(education.schools[i].location);
		}

		for (var j in work.jobs) {
			locations.push(work.jobs[j].location);
		}
		return locations;
	}

	/*
	createMapMarker(placeData) reads Google Places search results to create map pins.
	placeData is the object returned from search results containing information
	about a single location.
	*/
	function createMapMarker(placeData) {

		// The next lines save location data from the search result object to local variables
		var lat = placeData.geometry.location.lat(); // latitude from the place service
		var lon = placeData.geometry.location.lng(); // longitude from the place service
		var name = placeData.formatted_address; // name of the place from the place service
		var bounds = window.mapBounds; // current boundaries of the map window

		// marker is an object with additional data about the pin for a single location
		var marker = new google.maps.Marker({
			map: map,
			position: placeData.geometry.location,
			title: name
		});

		// infoWindows are the little helper windows that open when you click
		// or hover over a pin on a map. They usually contain more information
		// about a location.
		var infoWindow = new google.maps.InfoWindow({
			content: name
		});

		// hmmmm, I wonder what this is about...
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});

		// this is where the pin actually gets added to the map.
		// bounds.extend() takes in a map location object
		bounds.extend(new google.maps.LatLng(lat, lon));
		// fit the map to the new marker
		map.fitBounds(bounds);
		// center the map
		map.setCenter(bounds.getCenter());
	}

	/*
	callback(results, status) makes sure the search returned results for a location.
	If so, it creates a new map marker for that location.
	*/
	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			createMapMarker(results[0]);
		}
	}

	/*
	pinPoster(locations) takes in the array of locations created by locationFinder()
	and fires off Google place searches for each location
	*/
	function pinPoster(locations) {

		// creates a Google place search service object. PlacesService does the work of
		// actually searching for location data.
		var service = new google.maps.places.PlacesService(map);

		// Iterates through the array of locations, creates a search object for each location
		for (var place in locations) {

			// the search request object
			var request = {
				query: locations[place]
			};

			// Actually searches the Google Maps API for location data and runs the callback
			// function with the search results after each search.
			service.textSearch(request, callback);
		}
	}

	// Sets the boundaries of the map based on pin locations
	window.mapBounds = new google.maps.LatLngBounds();

	// locations is an array of location strings returned from locationFinder()
	locations = locationFinder();

	// pinPoster(locations) creates pins on the map for each location in
	// the locations array
	pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
	// Make sure the map bounds get updated on page resize
	map.fitBounds(mapBounds);
});


/* Skills
   =================== */


var pieData = [{
		value: 300,
		color: "#F7464A",
		highlight: "#FF5A5E",
		label: "HTML"
	}, {
		value: 50,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "CSS"
	}, {
		value: 100,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "JavaScript"
	}, {
		value: 40,
		color: "#949FB1",
		highlight: "#A8B3C5",
		label: "JQuery"
	}, {
		value: 120,
		color: "#4D5360",
		highlight: "#616774",
		label: "Bootstrap"
	}

];

window.onload = function() {
	var ctx = document.getElementById("chart-area").getContext("2d");
	window.myPie = new Chart(ctx).Pie(pieData);
};




// Animate.css for banner message -->

jQuery(document).ready(function() {

	jQuery('#intro').addClass("hideme").viewportChecker({
		classToAdd: 'visible animated zoomIn',
		offset: 100
	});


});



//Function for toggling navbar

$('.nav a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});

//Function for displaying navbar as page scrolls down
var offset = 340;
jQuery(window).scroll(function() {
	if (jQuery(window).scrollTop() < offset) {
		jQuery('#hidden-bar').fadeOut(200);
	} else if (jQuery(window).scrollTop() > offset) {
		jQuery('#hidden-bar').fadeIn(400);
	}
});



// Change active navigation menu on scrolling. 
//Adapted from http://stackoverflow.com/questions/14161132/jquery-scroll-change-navigation-active-class-as-the-page-is-scrolling-relative

$(window).scroll(function() {

	if ($(this).scrollTop() >= $('#about').offset().top) {
		$('.sidenav li').removeClass('active');
		$('.sidenav li:eq(0)').addClass('active');
	}

	if ($(this).scrollTop() >= $('#education').offset().top) {
		$('.sidenav li').removeClass('active');
		$('.sidenav li:eq(1)').addClass('active');
	}

	if ($(this).scrollTop() >= $('#workExperience').offset().top) {
		$('.sidenav li').removeClass('active');
		$('.sidenav li:eq(2)').addClass('active');
	}

	if ($(this).scrollTop() >= $('#projects').offset().top) {
		$('.sidenav li').removeClass('active');
		$('.sidenav li:eq(3)').addClass('active');
	}

	if ($(this).scrollTop() >= $('#skills').offset().top) {
		$('.sidenav li').removeClass('active');
		$('.sidenav li:eq(4)').addClass('active');
	}

	if ($(this).scrollTop() >= $('#connect').offset().top) {
		$('.sidenav li').removeClass('active');
		$('.sidenav li:eq(5)').addClass('active');
	}


});


var banner = {
  
    "name": "I am MADHU",
    "message": "This is my Interactive Resume",
    
     display : function () {

        var formattedName = HTMLbannerName.replace("%data%", banner.name);		
		var formattedMessage = HTMLbannerMessage.replace("%data%", banner.message);
		
		$('#intro').append(formattedName);
		$('#intro').append(formattedMessage);
		
}
    
};


var about = {
    "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus suscipit, congue velit tempus, mollis leo. Sed nunc libero, malesuada vel tempor eget, convallis sagittis arcu. Duis at dolor eu ex cursus varius. Suspendisse tincidunt finibus malesuada. Fusce ac nulla vitae mauris sodales placerat quis eget orci. Etiam eu mauris quis felis bibendum molestie ultrices eu risus. Phasellus lectus dui, sollicitudin quis diam nec, auctor varius arcu. Morbi ac enim tristique, ullamcorper leo at, malesuada nibh. ",

	display : function () {

        var formattedParagraph = HTMLaboutParagraph.replace("%data%", about.paragraph);
		$('#about .col-md-12:last').append(formattedParagraph);
		
}
};

var education = {
    "schools": [
        {
            "name": "Udacity",
            "major": "Front End Nanodegree",
            "date": "2015 - 2015",
			"location": "Mountain View, California"
      
        },
		{
            "name": "ABC University",
            "major": "MS Computer Engineering",
			"date": "2008 - 2010",
            "location": "San Diego, California"
      
        },
		{
            "name": "ABC University",
            "major": "BS Computer Engineering",
            "date": "2008 - 2010",
			"location": "San Diego, California"
      
        }
    ],
	
	display : function () {

	
	    for(i in education.schools) {
      
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);		
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
	    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);	
		
	    $('#education .col-md-12:last').append(HTMLeducation);
		$('.education-entry:last').append(HTMLschoolGlyphicon);
		$('.education-entry:last').append(formattedschoolName);
		$('.education-entry:last').append(formattedschoolMajor);
		$('.education-entry:last').append(formattedschoolDates);
		$('.education-entry:last').append(formattedschoolLocation);
		
		}
}
};

var work = {
    jobs: [
        {
            "company": "XYZ Corp",
            "role": "Programmer Analyst",
			"dates": "2008-2010",
			"location": "San Diego, California",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus suscipit, congue velit tempus, mollis leo. Sed nunc libero, malesuada vel tempor eget, convallis sagittis arcu. Duis at dolor eu ex cursus varius. Suspendisse tincidunt finibus malesuada."
         
        },
        {
           "company": "XYZ Corp",
            "role": "Programmer Analyst",
			"dates": "2008-2010",
			"location": "Los Angeles, California",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus suscipit, congue velit tempus, mollis leo. Sed nunc libero, malesuada vel tempor eget, convallis sagittis arcu. Duis at dolor eu ex cursus varius. Suspendisse tincidunt finibus malesuada."
        },
	    {
           "company": "XYZ Corp",
            "role": "Programmer Analyst",
			"dates": "2008-2010",
			"location": "Denver, Colorado",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus suscipit, congue velit tempus, mollis leo. Sed nunc libero, malesuada vel tempor eget, convallis sagittis arcu. Duis at dolor eu ex cursus varius. Suspendisse tincidunt finibus malesuada."
        },
		{
           "company": "XYZ Corp",
            "role": "Programmer Analyst",
			"dates": "2008-2010",
			"location": "Denver, Colorado",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus suscipit, congue velit tempus, mollis leo. Sed nunc libero, malesuada vel tempor eget, convallis sagittis arcu. Duis at dolor eu ex cursus varius. Suspendisse tincidunt finibus malesuada."
        },
		{
           "company": "XYZ Corp",
            "role": "Programmer Analyst",
			"dates": "2008-2010",
			"location": "Denver, Colorado",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus suscipit, congue velit tempus, mollis leo. Sed nunc libero, malesuada vel tempor eget, convallis sagittis arcu. Duis at dolor eu ex cursus varius. Suspendisse tincidunt finibus malesuada."
        },
    ],
	
	
    display : function () {

	
	    for(i in work.jobs) {
      
        var formattedworkCompany = HTMLworkCompany.replace("%data%", work.jobs[i].company);
		var formattedworkRole = HTMLworkRole.replace("%data%", work.jobs[i].role);	
	    var formattedworkDates = HTMLworkRole.replace("%data%", work.jobs[i].dates);		
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);		
		var formattedworkDesc = HTMLworkDesc.replace("%data%", work.jobs[i].desc);
	
				
	    $('#workExperience .col-md-12:last').append(HTMLwork);
		$('.work-entry:last').append(HTMLworkGlyphicon);
		$('.work-entry:last').append(formattedworkCompany);
		$('.work-entry:last').append(formattedworkRole);	
	    $('.work-entry:last').append(formattedworkDates);
		$('.work-entry:last').append(formattedworkLocation);
		$('.work-entry:last').append(formattedworkDesc);
		
		}
}
};

var projects = {
    "projects": [
        {
            "image": "images/face_2.jpg",
			"title": "Project 1",
            "desc": "Lorem ipsum dolor lorem"
        },
		{
            "image": "images/face_2.jpg",
            "title": "Project 2",
            "desc": "Lorem ipsum dolor lorem"
        },
		{
            "image": "images/face_2.jpg",
            "title": "Project 3",
            "desc": "Lorem ipsum dolor lorem"
        }   
    ],
	
	display : function () {


		for(i in projects.projects) {
      
        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
	    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedprojectDesc = HTMLprojectDesc.replace("%data%", projects.projects[i].desc);		
		
	    $('#projects .col-md-12:last').append(HTMLprojectDiv);
		$('.col-md-4:last').append(formattedprojectImage);
	    $('.col-md-4:last').append(formattedprojectTitle);
		$('.col-md-4:last').append(formattedprojectDesc);
	
		
		}
}
};


var skills = {
    "list": ["HTML","CSS","JavaScript","JQuery","Bootstrap"],
   
   display : function () {
   
		for(i in skills.list) {
      
        var formattedskillsList = HTMLlist.replace("%data%", skills.list[i]);
		
		$('ul:last').append(formattedskillsList);
		
		}
}
};


var contact = {
    "address":"San Francisco, California",
    "number":"8XX-XXX-XXXX",
    "list": ["images/github.png","images/linkedin.png","images/mail.png"],
   
   display : function () {


        $('#connect .col-md-12:last').append(HTMLcontact);
		for(i in contact.list) {
      
        var formattedcontactList = HTMLsocial.replace("%data%", contact.list[i]);
		
		$('ul:last').append(formattedcontactList);
		}
		
		var formattedAddress = HTMLaddress.replace("%data%", contact.address);
		var formattedNumber = HTMLnumber.replace("%data%", contact.number);
		
		$('#connect .col-md-12:last').append(formattedAddress);
		$('#connect .col-md-12:last').append(formattedNumber);
}
};


banner.display();
about.display();
education.display();
work.display();
projects.display();
skills.display();
contact.display();
$("#mapDiv").append(googleMap);
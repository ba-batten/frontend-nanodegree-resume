/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  'name': "Brandon Batten",
  'role': "Front-End Web Developer",
  'contacts': {
    'mobile': '919-631-9999',
    'email': 'ba_batten@live.com',
    'github': 'ba-batten',
    'location': 'Durham, NC'
  },
  'welcomeMessage': 'Hi, I am a front-end web developer and I would love to put my skills to work for YOU!',
  'skills': [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Java'
  ],
  'biopic': 'images/me.jpg'
};

var education = {
  'schools': [
    {
      'name': 'Wake Technical Community College',
      'location': 'Raleigh, NC',
      'degree': 'Associate of Science',
      'majors': ['Programming'],
      'dates': '2015 - present'
    },
    {
      'name': 'University of North Carolina Wilmington',
      'location': 'Wilmington, NC',
      'degree': 'Bachelor of Arts',
      'majors': ['Communication Studies'],
      'dates': '2005- 2008'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Front-End Web Developer Nanodegree',
      'school': 'Udacity',
      'dates': '2017',
      'url': 'www.udacity.com'
    }
  ]
};

var work = {
  jobs: [
    {
      'employer': 'State Employees\' Credit Union Insurance Services',
      'title': 'Insurance Specialist',
      'location': 'Raleigh, NC',
      'dates': '2014 - present',
      'description': 'Provide home and auto insurance solutions for SECU members.  Serviced all policies sold.  ' +
      'Serve as back office support for over 400 agents in the SECU branch network.  Trained new agents both within ' +
      'the department and branch network.'
    },
    {
      'employer': 'North Carolina Farm Bureau Insurance Company',
      'title': 'Insurance Agent',
      'location': 'Chapel Hill, NC',
      'dates': '2014',
      'description': 'Maintained a $500,000 book of business by identifying insurance needs of existing clients and ' +
      'offering insurance products, such as home, auto, life, and health insurance, designed to meet those needs.' +
      ' Conducted thorough life insurance reviews with each client in order to protect their family\'s standard of ' +
      'living in the event of their death.  Identified new clientele to offer insurance products.'
    },
    {
      'employer': 'State Employees\' Credit Union',
      'title': 'Sr. Financial Services Officer',
      'location': 'Chapel Hill, NC',
      'dates': '2008 - 2014',
      'description': 'Responsible for making sound lending decisions regarding mortgages, auto loans, and various' +
        ' personal loans.  Advised clients on retirement, investing, and taxes by analyzing their needs and taking ' +
        'other factors into account such as risk tolerance, age, wealth, etc. in order design financial planning ' +
        'solutions tailored to clients\'s needs'
    }
  ]
};

var projects = {
  'projects': [
    {
      'title': 'Online Portfolio',
      'dates': '2017',
      'description': 'Overview of projects in which I have been involved.  Displays thumbnails of each project ' +
      'along with a brief description of the project.  Users can click on the project thumbnails to display a larger ' +
      'modulus with expanded details of the project.  Used HTML, CSS, and Bootstrap to complete the project as part of ' +
      'the Udacity Front-End Web Developer Nanodegree',
      'images': [
        'images/project1.jpg',
        'images/project2.jpg'
      ]
    }

  ]
};

var data = '%data%';

//=======================================================================================================================
// Add bio information to the page
//=======================================================================================================================
bio.display = function(){
  // Add bio.name and bio.role
  var formattedName, formattedRole, formattedBioPic, formattedWelcomeMsg;

  formattedName = HTMLheaderName.replace(data, bio.name);
  formattedRole = HTMLheaderRole.replace(data, bio.role);
  formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
  formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

  $('#header').prepend(formattedName, formattedRole, formattedBioPic);
  $('#header').append(formattedWelcomeMsg);

  // Use a for loop to add all skills to #header
  $('#header').append(HTMLskillsStart);

  for (var x = 0; x < bio.skills.length; x++){
    var formattedSkill;
    formattedSkill = HTMLskills.replace(data, bio.skills[x]);

    $('#skills').append(formattedSkill);
  }

  // Populate topContacts with info from bio.contacts
  var formattedMobile, formattedEmail, formattedGithub, formattLocation;

  formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
  formattedEmail = HTMLemail.replace(data, bio.contacts.email);
  formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
  formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

  $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
};

//=======================================================================================================================
// Add work information to the page
//=======================================================================================================================
work.display = function(){
  for (var x = 0; x < work.jobs.length; x++){
    $('#workExperience').append(HTMLworkStart);
    var formattedJob = work.jobs[x];
    var formattedEmployer, formattedTitle, formattedLocation, formattedDates, formattedDescription;

    formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[x].employer);
    formattedTitle = HTMLworkTitle.replace(data, work.jobs[x].title);

    formattedEmployerTitle = formattedEmployer + formattedTitle;

    formattedLocation = HTMLworkLocation.replace(data, work.jobs[x].location);
    formattedDates = HTMLworkDates.replace(data, work.jobs[x].dates);
    formattedDescription = HTMLworkDescription.replace(data, work.jobs[x].description);

    $('.work-entry:last').append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
  }
};

//=======================================================================================================================
// Add projects to the page
//=======================================================================================================================
projects.display = function(){
  for (var x = 0; x < projects.projects.length; x++){
    $('#projects').append(HTMLprojectStart);

    var formattedprojectTitle, formattedprojectDates, formattedprojectDescription, imageArray;

    imageArray = projects.projects[x].images;

    formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[x].title);
    formattedprojectDates = HTMLprojectDates.replace(data, projects.projects[x].dates);
    formattedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[x].description);

    $('.project-entry:last').append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);

    for (var y = 0; y < imageArray.length; y++){
      var formattedImage;

      formattedImage = HTMLprojectImage.replace(data, imageArray[y]);

      $('.project-entry:last').append(formattedImage);
    }
  }
};

//=======================================================================================================================
// Add education to page
//=======================================================================================================================
education.display = function(){
  // add schools
  for (var x = 0; x < education.schools.length; x++){
    $('#education').append(HTMLschoolStart);

    var school, formattedName, formattedLocation, formattedDegree, formattedMajors, formattedDates;

    school = education.schools[x];
    formattedName = HTMLschoolName.replace(data, school.name);
    formattedDegree = HTMLschoolDegree.replace(data, school.degree);

    formattedNameDegree = formattedName + formattedDegree;

    formattedLocation = HTMLschoolLocation.replace(data, school.location);
    formattedMajors = HTMLschoolMajor.replace(data, school.majors.join(', '));
    formattedDates = HTMLschoolDates.replace(data, school.dates);

    $('.education-entry:last').append(formattedNameDegree, formattedDates, formattedLocation, formattedMajors);
  }

  // add online Classes
  $('.education-entry:last').append(HTMLonlineClasses);

  for (var a = 0; a < education.onlineCourses.length; a++){
    var formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL, onlineSchool;

    onlineSchool = education.onlineCourses[a];

    formattedOnlineTitle = HTMLonlineTitle.replace(data, onlineSchool.title);
    formattedOnlineSchool = HTMLonlineSchool.replace(data, onlineSchool.school);

    formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

    formattedOnlineDates = HTMLonlineDates.replace(data, onlineSchool.dates);
    formattedOnlineURL = HTMLonlineURL.replace(data, onlineSchool.url);

    $('.education-entry:last').append(formattedOnlineTitleSchool, formattedOnlineDates, formattedOnlineURL);
  }
};

bio.display();
work.display();
projects.display();
education.display();

//=======================================================================================================================
// Add interactive map to page
//=======================================================================================================================
$('#mapDiv').append(googleMap);

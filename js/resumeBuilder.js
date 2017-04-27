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
  'welcomeMsg': 'Hi, I am a front-end web developer and I would love to put my skills to work for YOU!',
  'skills': [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Java'
  ],
  'biopic': 'images/me.jpg'
  // 'display': function(){};
};

var education = {
  'schools': [
    {
      'name': 'Udacity',
      'location': 'null',
      'degree': 'Front-End Web Developer Nanodegree',
      'majors': 'null',
      'dates': '2017',
      'url': 'https://www.udacity.com/'
    },
    {
      'name': 'Wake Technical Community College',
      'location': 'Raleigh, NC',
      'degree': 'Associate of Science',
      'majors': 'Programming',
      'dates': '2015 - present',
      'url': 'https://www.waketech.edu/'
    },
    {
      'name': 'University of North Carolina Wilmington',
      'location': 'Wilmington, NC',
      'degree': 'Bachelor of Arts',
      'majors': 'Communication Studies',
      'dates': '2005- 2008',
      'url': 'http://www.uncw.edu/'
    }
  ]
  // 'display': function(){};
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
  // 'display': function(){};
};

var projects = {
  'projects': [
    {
      'title': 'Online Portfolio',
      'dates': '2017',
      'description': 'Overview of projects in which I have been involved.  Displays thumbnails of each project ' +
      'along with a brief description of the project.  Users can click on the project thumbnails to display a larger ' +
      'modulus with expanded details of the project.  Used HTML, CSS, and Bootstrap to complete the project as part of ' +
      'the Udacity Front-End Web Developer Nanodegree'
    }
  ]
  // display: functin(){}
}

//=======================================================================================================================
// Add bio information to the page
//=======================================================================================================================

// Add bio.name and bio.role
var formattedName, formattedRole;

formattedName = HTMLheaderName.replace('%data%', bio.name);
formattedRole = HTMLheaderRole.replace('%data%', bio.role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

// Populate topContacts with info from bio.contacts
var formattedMobile, formattedEmail, formattedGithub, formattLocation;

formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedLocation);

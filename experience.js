$(document).ready(function(){
  experiences = [
    {
      'company': 'Nikola Motor Company',
      'title': 'Senior Software Engineer',
      'year': '2019',
      'image': './images/experience/nikola.png'
    },
    {
      'company': 'Fortify / FightTheNewDrug',
      'title': 'CTO',
      'year': '2017 - 2019',
      'image': './images/experience/fortify.png'
    },
    {
      'company': 'Jarvis Ventures',
      'title': 'Lead Software Engineer',
      'year': '2016 - 2017',
      'image': './images/experience/jarvis.png'
    },
    {
      'company': 'BYU',
      'title': 'Web Developer',
      'year': '2015',
      'image': './images/experience/byu.png'
    },
    {
      'company': 'Church of Jesus Christ of Latter-day Saints',
      'title': 'Software Engineer',
      'year': '2015',
      'image': './images/experience/church.png'
    },
    {
      'company': 'SnapPower',
      'title': 'Tech Consultant, Data Processing',
      'year': '2014',
      'image': './images/experience/snap.png'
    }
  ]

  for(var x=0;x<experiences.length;x++){
    content = "<div class='experience-item'>" +
                "<div class='experience-item-img'><img src='" + experiences[x]['image'] + "'></div>" +
                "<div class='experience-item-details'>" +
                  "<div class='experience-item-title'>" + experiences[x]['title'] + "</div>" +
                  "<div class='experience-item-company'>" + experiences[x]['company'] + "</div>" +
                  "<div class='experience-item-year'>" + experiences[x]['year'] + "</div>" +
                "</div>" +
              "</div>"
    $('#work-experience-list').append(content)
  }







  other_experiences = [
    {
      'company': 'Marriott School of Business',
      'title': 'Master of Information Systems Management',
      'year': '2017',
      'image': './images/experience/byu.png'
    },
    {
      'company': 'ROK Army',
      'title': 'Sergeant',
      'year': '2011 - 2013',
      'image': './images/experience/army.png'
    },
    {
      'company': 'JLS',
      'title': 'Tech Support, Instructor',
      'year': '2010',
      'image': './images/experience/jls.png'
    },
    {
      'company': 'Church of Jesus Christ of Latter-day Saints',
      'title': 'Service Missionary',
      'year': '2008 - 2010',
      'image': './images/experience/church.png'
    }
  ]

  for(var x=0;x<other_experiences.length;x++){
    content = "<div class='experience-item'>" +
                "<div class='experience-item-img'><img src='" + other_experiences[x]['image'] + "'></div>" +
                "<div class='experience-item-details'>" +
                  "<div class='experience-item-title'>" + other_experiences[x]['title'] + "</div>" +
                  "<div class='experience-item-company'>" + other_experiences[x]['company'] + "</div>" +
                  "<div class='experience-item-year'>" + other_experiences[x]['year'] + "</div>" +
                "</div>" +
              "</div>"
    $('#other-experience-list').append(content)
  }
})

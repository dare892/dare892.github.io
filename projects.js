$(document).ready(function(){
  projects = [
    {'title': 'Commemo',
     'description': 'Commemo is an online platform for collaborating on commemorations - birthdays, funerals, anniversaries, and much more. Simply create a book and send out links to collect stories and pictures.',
     'url': 'https://www.commemo.co/',
     'url_text': 'https://www.commemo.co/',
     'contributions': ['backend','frontend','UX', 'business development', 'user testing','marketing'],
     'role': 'Lead Developer',
     'status': 'LIVE',
     'photos': [
        './images/projects/commemo/1.png',
        './images/projects/commemo/2.png',
        './images/projects/commemo/3.png'
     ]
    },
    {'title': 'Fortify',
     'description': 'Fortify is an online porn-addition recovery platform that provides various tools for a long-lasting recovery. Tools include curriculum(videos and quizzes), daily tracker, webinars, online groups, community, messaging, and much more. ',
     'url': 'https://www.joinfortify.com/',
     'url_text': 'https://www.joinfortify.com/',
     'contributions': ['backend','frontend','UX', 'business development', 'api', 'project management'],
     'role': 'CTO, Lead developer',
     'status': 'LIVE',
     'photos': [
        './images/projects/fortify/1.png',
        './images/projects/fortify/2.png',
        './images/projects/fortify/3.png'
     ]
    },
    {'title': 'Livingtags',
     'description': 'Commemorate the death of your loved ones with a special, steel-engraved QR tag that will reveal stories and photos about their lives.',
     'url': 'https://www.livingtags.com/',
     'url_text': 'https://www.livingtags.com/',
     'contributions': ['backend','frontend', 'api'],
     'role': 'Contributor',
     'status': 'LIVE',
     'photos': [
        './images/projects/livingtags/1.png',
        './images/projects/livingtags/2.png',
        './images/projects/livingtags/3.png',
        './images/projects/livingtags/4.png'
     ]
    },
    {'title': 'Nikola Motor',
     'description': 'Nikola Motor Company, based in Phoenix, AZ manufactures Hydrogen & fuel-cell powered semi trucks. The platfrom includes the marketing site as well as all the internal tools for the company.',
     'url': 'https://nikolamotor.com/',
     'url_text': 'https://nikolamotor.com/',
     'contributions': ['backend','frontend', 'e-commerce'],
     'role': 'Major Contributor',
     'status': 'LIVE',
     'photos': [
        './images/projects/nikola/1.png',
        './images/projects/nikola/2.png',
        './images/projects/nikola/3.png'
     ]
    },
    {'title': 'Bilingol',
     'description': 'An online platform that helps those that speak Spanish to effectively learn English. Round 1 of user testing ended and is currently under business development. Getting ready to launch v2 soon.',
     'url': '#',
     'url_text': 'Currently under maintenance',
     'contributions': ['backend','frontend','UX', 'api'],
     'role': 'Lead Developer',
     'status': 'PROTOTYPE',
     'photos': [
        './images/projects/bilingol/1.png',
        './images/projects/bilingol/2.png',
        './images/projects/bilingol/3.png'
     ]
    },
    {'title': 'Olumo',
     'description': "Use the power of Olumo’s millions of daily data points to gain deep insights into how you’re doing. Olumo campaigns compare your anonymized results to other organizations to show benchmark performance.",
     'url': 'https://www.olumo.com',
     'url_text': 'https://www.olumo.com',
     'contributions': ['frontend'],
     'role': 'Contributor',
     'status': 'LIVE',
     'photos': [
        './images/projects/olumo/1.png',
        './images/projects/olumo/2.png',
        './images/projects/olumo/3.png'
     ]
    },
    {'title': 'ShopStevie',
     'description': "Online retailers for women's clothing. A custom multi-tenant solution was built.",
     'url': 'https://www.shopstevie.com/',
     'url_text': 'https://www.shopstevie.com/',
     'contributions': ['backend','frontend'],
     'role': 'Contributor',
     'status': 'LIVE',
     'photos': [
        './images/projects/shopstevie/1.png',
        './images/projects/shopstevie/2.png',
        './images/projects/shopstevie/3.png'
     ]
    }
  ]



  for(var x=0;x<projects.length;x++){
    $('#projects-list').append("<div class='project-name' data-trigger-project-id=" + x + ">" + projects[x]['title'] + "</div>")

    photos = ''
    for(var y=0;y<projects[x]['photos'].length;y++){
      photos += "<img src=" + projects[x]['photos'][y] + '>'
    }
    contributions = ''
    for(var y=0;y<projects[x]['contributions'].length;y++){
      contributions += "<span class='pill'>" + projects[x]['contributions'][y] + '</span>'
    }
    title = projects[x]['title']
    status = projects[x]['status']
    description = projects[x]['description']
    url = projects[x]['url']
    url_text = projects[x]['url_text']
    role = projects[x]['role']

    content = "<div class='hidden' data-project-id=" + x + ">" +
                  "<div class='photos'>" +
                    photos +
                  "</div>" +
                  "<h3 style='margin-top: 30px;'>" + title + "</h4>" +
                  "Status : <span class='pill status-pill'>" + status + "</span>" +
                  "<h6 style='margin-top: 30px;'>" + description + "</h6>" +
                  "<h5 style='margin-top: 30px;color:#35cdf5;'>" + role + "</h6>" +
                  "<div class='contributions' style='margin-top: 15px;'>" + contributions + "</div>" +
                  "<div style='margin-top:40px;'><a href='" + url + "'><h6>" + url_text + "</h6></a></div>" +
              "</div>"
    $('#projects-content').append(content)
  }



  $('[data-trigger-project-id]').click(function(){
    project_id = $(this).attr('data-trigger-project-id')
    $('[data-trigger-project-id]').removeClass('selected')
    $(this).addClass('selected')

    $('[data-project-id]').addClass('hidden')
    $('[data-project-id='+project_id+']').removeClass('hidden')
  })
  $('[data-trigger-project-id]').first().click()
})

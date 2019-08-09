$(document).ready(function(){
  skills = [
    {'title': 'Ruby (on Rails)',
     'level': 100,
    },
    {'title': 'CSS',
     'level': 100,
    },
    {'title': 'Html',
     'level': 100,
    },
    {'title': 'Postgresql',
     'level': 100,
    },
    {'title': 'Mysql',
     'level': 100,
    },
    {'title': 'Javascript (ES6, jQuery)',
     'level': 90,
    },
    {'title': 'AWS',
     'level': 75,
    },
    {'title': 'TDD',
     'level': 70,
    },
    {'title': 'Dev Ops',
     'level': 70,
    },
    {'title': 'Python (Django)',
     'level': 70,
    },
    {'title': 'Crystal (Amber)',
     'level': 60,
    },
    {'title': 'PHP (CodeIgniter)',
     'level': 50,
    },
    {'title': 'Reactjs',
     'level': 40,
    },
    {'title': 'iOS',
     'level': 40,
    },
    {'title': 'Angularjs',
     'level': 30,
    },
    {'title': 'Android',
     'level': 20,
    }
  ]



  for(var x=0;x<skills.length;x++){
    content = "<div class='skill-item'>" +
                "<div class='skill-item-title'>" + skills[x]['title'] + "</div>" +
                "<div class='skill-item-level'>" + skills[x]['level'] + "%</div>" +
                "<div class='skill-item-bar-wrapper'>" +
                  "<div class='skill-item-bar' data-level=" + skills[x]['level'] + "></div>" +
                "</div>" +
              "</div>"
    $('#skills-list').append(content)
  }

  $('.skill-item-bar').each(function(){
    level = $(this).attr('data-level')
    $(this).css('width', level + '%')
  })
})

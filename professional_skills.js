$(document).ready(function(){
  professional_skills = [
    {'title': 'Communication',
     'level': 100,
    },
    {'title': 'Product management',
     'level': 90,
    },
    {'title': 'Project management',
     'level': 90,
    },
    {'title': 'UX',
     'level': 80,
    }
  ]



  for(var x=0;x<professional_skills.length;x++){
    content = "<div class='skill-item'>" +
                "<div class='skill-item-title'>" + professional_skills[x]['title'] + "</div>" +
                "<div class='skill-item-level'>" + professional_skills[x]['level'] + "%</div>" +
                "<div class='skill-item-bar-wrapper'>" +
                  "<div class='skill-item-bar professional' data-level=" + professional_skills[x]['level'] + "></div>" +
                "</div>" +
              "</div>"
    $('#professional-skills-list').append(content)
  }

  $('.skill-item-bar').each(function(){
    level = $(this).attr('data-level')
    $(this).css('width', level + '%')
  })
})

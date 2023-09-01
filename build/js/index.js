function teamHandler() {
    const teamElement = document.getElementById('team')
    const list = teamElement.firstElementChild;
    const chid = list.querySelector('ul')
    
    const SkillsList = [
        'Typescript',
        'Javascript',
        'React',
        'REST APIs',
        'Redux',
        'test driven development',
        'Data modeling',
        'JWT',
        'CSS',
        'fronted architecture',
        'Figma',
        'Nest.JS',
        'ORM',
        'Prisma',
        'GraphQL',
        'CI/CD',
        'Scrum Framework',
    ];
  
    SkillsList.map((items) => {
        const li = document.createElement('li');
        li.classList.add('listStyling')
        li.textContent = items;
        chid.appendChild(li)     
    })
    
    
    }
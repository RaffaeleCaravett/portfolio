import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subjects } from 'src/app/Services/subjects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
bg!:string
constructor(private subjectService:Subjects){
subjectService.themeSubject.subscribe((data:string)=>{
  this.bg=data
})
}
  ngOnInit(): void {
  }

  skillsArray:any[] = [
    {
      category: 'Frontend skills',
      tools: [
        { name: 'HTML', description: 'HyperText Markup Language used for structuring content on the web.' ,
      image:'assets/homepage-images/front/html5.png'},
        { name: 'CSS', description: 'Cascading Style Sheets for styling the visual presentation of HTML documents.' ,
      image:'assets/homepage-images/front/css3.png'},
        { name: 'JavaScript', description: 'Versatile programming language enabling dynamic and interactive web pages.' ,
      image:'assets/homepage-images/front/JavaScript.png'},
        { name: 'EC6', description: 'ECMAScript 2015, the sixth edition of the JavaScript language specification.' ,
      image:'assets/homepage-images/front/ecma-script.webp'},
        { name: 'TypeScript', description: 'Superset of JavaScript that adds static typing to the language.' ,
      image:'assets/homepage-images/front/Typescript_logo_2020.svg.png'},
        { name: 'Bootstrap', description: 'Popular CSS framework for building responsive and visually appealing designs.' ,
      image:'assets/homepage-images/front/Bootstrap_logo.svg.webp'},
        { name: 'Sass', description: 'Syntactically Awesome Stylesheets, a CSS preprocessor scripting language.' ,
      image:'assets/homepage-images/front/sass-image.png'},
        { name: 'Angular', description: 'Platform and framework for building client-side applications with TypeScript.' ,
      image:'assets/homepage-images/front/Angular-JavaScript.png'},
        { name: 'Angular Material', description: 'UI component library for Angular applications.' ,
      image:'assets/homepage-images/front/aMaterial.png'},
        { name: 'Three.js', description: 'Cross-browser JavaScript library/API for creating 3D graphics.' ,
      image:'assets/homepage-images/front/threejs.png'},
      ]
    },
    {
      category: 'Versioning skills',
      tools: [
        { name: 'Git', description: 'Distributed version control system for tracking changes in source code.' ,
      image:'assets/homepage-images/versioning/Git-logo.svg.png'},
        { name: 'GitHub', description: 'Web-based platform providing hosting for software development and version control using Git.' ,
      image:'assets/homepage-images/versioning/gh.png'},
        { name: 'SourceTree', description: 'Git GUI client that simplifies interaction with Git repositories through a visual interface.' ,
      image:'assets/homepage-images/versioning/source.png'},
        { name: 'GitHub Desktop', description: 'Desktop application for managing GitHub repositories using a graphical interface.' ,
      image:'assets/homepage-images/versioning/Github-desktop-logo-symbol.svg.png'}
      ]
    },
    {
      category: 'Task management',
      tools: [
        { name: 'Trello', description: 'Project management tool using boards, lists, and cards to organize tasks and projects.' ,
      image:'assets/homepage-images/task/trello.png'},
        { name: 'Jira', description: 'Comprehensive tool for issue tracking, project management, and agile development.' ,
      image:'assets/homepage-images/task/atlassian-jira-logo-large.png'},
        { name: 'Atlassian', description: 'Company behind popular collaboration and productivity tools, including Jira and Confluence.' ,
      image:'assets/homepage-images/task/atlassian-blue-logo.png'}
      ]
    },
    {
      category: 'Backend skills',
      tools: [
        { name: 'Java', description: 'Versatile and widely-used programming language for building backend applications.' ,
      image:'assets/homepage-images/back/java.svg'},
        { name: 'Spring', description: 'Framework for building Java-based enterprise applications, providing comprehensive infrastructure support.' ,
      image:'assets/homepage-images/back/og-spring.png'},
        { name: 'Spring DevTools', description: 'Set of tools enhancing development experience with Spring Boot applications.' ,
      image:'assets/homepage-images/back/dev.jpg'},
        { name: 'Spring Security', description: 'Powerful and customizable authentication and access control framework for Java applications.' ,
      image:'assets/homepage-images/back/security.png'},
        { name: 'Spring JPA', description: 'Part of the Spring Data project, it simplifies data access with Java Persistence API (JPA).' ,
      image:'assets/homepage-images/back/boot-data.png'},
        { name: 'Spring Web', description: 'Part of the Spring Framework, it provides features for building web applications in Java.' ,
      image:'assets/homepage-images/back/web.png'}
      ]
    },
    {
      category: 'Database skills',
      tools: [
        { name: 'DBMS', description: 'Database Management System, software for efficiently storing, retrieving, and managing data.',
      image:'assets/homepage-images/database/DBMS.png' },
        { name: 'MySQL', description: 'Open-source relational database management system known for its reliability and performance.',
      image:'assets/homepage-images/database/mysql.jpg' },
        { name: 'PostgreSQL', description: 'Powerful, open-source object-relational database system supporting SQL and NoSQL data models.',
      image:'assets/homepage-images/database/postgres.png' },
        { name: 'DBeaver', description: 'Universal database tool supporting various database management systems.',
      image:'assets/homepage-images/database/dbeaver.png' },
        { name: 'pgAdmin', description: 'PostgreSQL administration and management tool with a web-based interface.' ,
      image:'assets/homepage-images/database/pgadmin.webp'},
        { name: 'Database Relazionali', description: 'Relational databases that organize data into tables with defined relationships.',
      image:'assets/homepage-images/database/relational_databases.png' },
        { name: 'Database in Memory', description: 'Databases that primarily store and manage data in RAM for faster access.',
      image:'assets/homepage-images/database/memory.svg' }
      ]
    }
  ];

  projectsArray = [
    {
      title: "Unbreakable",
      description: "Trial version. Unbreakable is a project that mirin to the overall health of the human being. It is all to discover. Like developing tools i've used Angular, typescript,html,"+
      "css,javascript, bootstrap, java, spring, postgresql database, three.js and of course git.",
      link: "https://unbreakablecsrc.web.app"
    },
    {
      title: "Terra mia Pizzeria",
      description: "Pizzeria application for visit the pizzeria, take order from waitress. Technologies used : Angular, Spring.",
      link: "https://terramiaproject.web.app"
    },
    {
      title: "Antichi delitti",
      description: "Website for users that want to see articles from author, and for author that can publish articles for users. Tecnhologies used : Angular, Spring",
      link: "https://antichidelitti.web.app"
    },
    {
      title: "Giochi con le carte",
      description: "Four card games: Guess the card, who has the highest, who has the lowest, take the same. Tecnhologies used : Angular, Spring",
      link: "https://giococarte.web.app"
    }
  ];
  private scrollIntervals: { [key: number]: any } = {};

  scrollLeft(i: number) {
    const scrollContainer = document.getElementById('scrollContainer' + i);
    if (scrollContainer) {
      this.scrollIntervals[i] = setInterval(() => {
        scrollContainer.scrollLeft -= 5;
      }, 10);
    }
  }

  scrollRight(i: number) {
    const scrollContainer = document.getElementById('scrollContainer' + i);
    if (scrollContainer) {
      this.scrollIntervals[i] = setInterval(() => {
        scrollContainer.scrollLeft += 5;
      }, 10);
    }
  }

  stopScroll(i: number) {
    clearInterval(this.scrollIntervals[i]);
  }
}

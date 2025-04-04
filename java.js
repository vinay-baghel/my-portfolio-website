// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        bar.style.width = "0%";
        setTimeout(() => {
            bar.style.transition = "width 3s ease-in-out";
            bar.style.width = bar.classList.contains("html") ? "90%" :
                             bar.classList.contains("css") ? "80%" :
                             bar.classList.contains("js") ? "70%" :
                             bar.classList.contains("react") ? "50%" : "0%";
        }, 800);
    });
});
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});
const typed = new Typed('.multiple-text',{
    strings: ['Fronted Designer.','Web Developer.'],
    typespeed: 20,
    backspeed: 20,
    backdelay:500,
    loop: true,
});
const projects = [
    
    {
        name: "To-Do App",
        description: "A simple task management app with local storage support.",
        link: "https://your-todo-app.com"
    },
    {
        name: "Weather App",
        description: "A simple Weather app built with HTML, CSS, and JavaScript.",
        link: "https://your-todo-app.com"
    },
    {
        name: "Weather App",
        description: "A simple Weather app built with HTML, CSS, and JavaScript.",
        link: "https://your-todo-app.com"
    },
    {
        name: "Weather App",
        
        description: "A simple Weather app built with HTML, CSS, and JavaScript.",
        link: "https://your-todo-app.com"
    },
    {
        name: "Weather App",
        description: "A simple Weather app built with HTML, CSS, and JavaScript.",
        link: "https://your-todo-app.com"
    },
];

function displayProjects() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = ""; // Clear existing content

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectDiv);
    });
}

displayProjects();
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  });


  const button = document.getElementById("hamtoggle");
  const navButton = document.getElementById("navtoggle");
  
  button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevents default anchor behavior
      event.stopPropagation(); // Stops event from bubbling
  
      navButton.classList.toggle("active"); // Toggles the menu
  });

const projects = [
    {
        src: "./images/Zinga Juice/zinga-1.jpg",
        title: "Zinga Juice Project",
        ahref:"zingajuice.html",
    },
    {
        src: "./images/Sable Blossom/sable-1.1920.png",
        title: "Sable Graphic Tablet Project",
        ahref:"sable.html",
    },
    {
        src: "./images/Akira Pills/akira-1.1920.png",
        title: "Akira Pills",
        ahref:"akira.html",
    },
    {
        src: "./images/Logos/logo-9.1920.png",
        title: "Logos",
        ahref:"logos.html",
    }
];


const displayProjectsOnContainer = (projects) => {
    const projectsContainer = document.querySelector(".projects-container");
    //console.log(projectsContainer)
    projects.forEach((project, index) => {
        console.log(project.src)
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${project.src}" alt="img-${index}">
            <a href="${project.ahref}"><h3>${project.title}</h3></a>
        `;
        projectsContainer.appendChild(li);
    });
};

displayProjectsOnContainer(projects);


//const one = "hello world"   // un string 
//const two = 56              // un entier (integer)
//const three = 56.899        // un nombre decimal (float)
//const four = true
// const five = ["bonjour", "ca va?", 62] 

// const element = five[1]
// console.log("hello world")//
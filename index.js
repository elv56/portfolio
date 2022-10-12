
const projects = [
    {
        src: "./images/Zinga Juice/zinga-1.jpg",
        title: "Zinga Juice Project",
    },
    {
        src: "./images/Sable Blossom/sable-1.1920.png",
        title: "Sable Graphic Tablet Project",
    },
    {
        src: "./images/Akira Pills/akira-1.1920.png",
        title: "Akira Pills",
    },
    {
        src: "./images/Logos/logo-9.1920.png",
        title: "Logos",
    }
];


const displayProjectsOnContainer = (projects) => {
    const projectsContainer = document.querySelector(".projects-container");
    projects.forEach((project, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${project.src}" alt="img-${index}">
            <a><h3>${project.title}</h3></a>
        `;
        projectsContainer.appendChild(li);
    });
};

displayProjectsOnContainer(projects);



const ABOUT_REQUEST = new XMLHttpRequest();
const PROJECT_REQUEST = new XMLHttpRequest();

const ABOUT = document.getElementById("about").getElementsByClassName("container")[0];
const PROJECTS = document.getElementById("projects").getElementsByClassName("container")[0];

logError = (request) => {
    console.log(request)
    console.log(`error: ${request.status}`)
}

addProject = (part, repo) => {
    part.innerHTML += projectBox(repo.name, repo.description, repo.html_url);
}

let projectBox = (title, content, link) => `<div><a href = "${link}"><h3>${title}</h3><p>${content}</p></a></div>`;

ABOUT_REQUEST.open("GET", "https://api.github.com/repos/AngleSideAngle/AngleSideAngle/contents/README.md?ref=main");
ABOUT_REQUEST.setRequestHeader("Accept", "application/vnd.github.3.html");
ABOUT_REQUEST.send();

ABOUT_REQUEST.onload = () => {
    if(ABOUT_REQUEST.status === 200) {
        ABOUT.innerHTML = ABOUT_REQUEST.response;
        console.log(ABOUT_REQUEST.response);
    } else{
        logError(ABOUT_REQUEST);
    }
}


PROJECT_REQUEST.open("GET", "https://api.github.com/users/AngleSideAngle/repos");
PROJECT_REQUEST.send();

PROJECT_REQUEST.onload = () => {
    if(PROJECT_REQUEST.status === 200) {
        response = JSON.parse(PROJECT_REQUEST.response);
        for(repo of response) {
            if(repo.description && repo.fork == false) {
                addProject(PROJECTS, repo);
                console.log(repo);
            }
        }
    } else {
        logError(PROJECT_REQUEST);
    }
}

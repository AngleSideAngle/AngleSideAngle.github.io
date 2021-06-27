
const request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/AngleSideAngle/repos");
request.send();

let projectBox = (title, content, link) => `<div><a href = "${link}"><h3>${title}</h3><p>${content}</p></a></div>`;

const projects = document.getElementById("projects").getElementsByClassName("container")[0];

addProject = (repo) => {
    projects.innerHTML += projectBox(repo.name, repo.description, repo.html_url);
}

request.onload = () => {
    if(request.status === 200) {
        response = JSON.parse(request.response);
        for(repo of response) {
            if(repo.description) {
                addProject(repo);
                console.log(repo)
            }
        }
    } else {
        console.log(request)
        console.log(`error: ${request.status}`)
    }
}

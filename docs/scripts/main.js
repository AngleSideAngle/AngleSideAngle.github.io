
const request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/AngleSideAngle");
request.send();

request.onload = () => {
    console.log(request);
}
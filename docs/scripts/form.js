let fields = {};
document.addEventListener("DOMContentLoaded", () => {
    fields.name = document.getElementById("name");
    fields.email = document.getElementById("email");
    fields.text = document.getElementById("send");
})

emptyCheck = (text) => {
    if(text == null || typeof text == "undefined") {
        return false;
    }
    return (text.length > 0);
}

emailCheck = (email) => {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}
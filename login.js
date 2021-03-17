function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    
    if (username == "") {
        alert("Please Enter the Username");
        return false;
    }
    if (password == "") {
        alert("Please Enter the Password");
        return false;
    }
    // check is user input matches username and password
    if (username == "admin" && password == "123456") {

        location.replace("index.html");

        // stop the function if this is found to be true
        return;
    }
    
    

    else
        alert("Invalid username or password");


}
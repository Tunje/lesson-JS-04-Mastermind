window.onload = function() {
    let user;
    let pass;
    let check;
    user = prompt("Enter your username:");
    pass = prompt("Enter your password:");
    if(pass.includes(user) == true)
        {
            check = false;
        }
    else if(pass.includes(" ") == true)
        {
            check = false;
        }
    else if(pass.length < 8)
        {
            check = false;
        }
    else
        {
            check = true;   
        }
    console.log("Username: "+user);
    console.log("password: "+pass);
    console.log("validation: "+check);
};
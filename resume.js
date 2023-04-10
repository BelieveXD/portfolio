//to change the color of main body to dark

function modechange() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//To change the color of about section
function bioch(){
    var bio = document.getElementById("fb1");
    bio.classList.toggle("cb");
}

//back to top button

let mybutton = document.getElementById("top_btn");

window.onscroll = function()
{
    scrollfunction();
}

function scrollfunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 )
    {
        mybutton.style.display = "block";
    } 
    else
    {
        mybutton.style.display = "none";
    }
}

function topfunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const colors = ["red","green","blue","yellow","white","black"]
const facit = []
const reveal = ["false","false","false","false"]
let j = 4;
let k = 0;
function start() 
    {
    let circles = document.getElementsByClassName("computer");
    for(let i = 0; i < circles.length; i++) 
        {
        if( circles[i].classList.contains("boardcircle"))
            {
            let col = colors[Math.floor(Math.random()*colors.length)];
            circles[i].classList.remove("white");
            circles[i].classList.remove("red");
            circles[i].classList.remove("green");
            circles[i].classList.remove("blue");
            circles[i].classList.remove("yellow");
            circles[i].classList.remove("black");
            console.log("adding color: "+col);
            circles[i].classList.add(col);
            facit.push(col);
            console.log(facit);
            circles[i].classList.add("disepear");
            }
        else
            {
            circles[i].classList.remove("disepear");
            }
        }
    }

function reset() 
    {
    j = 4
    let circles = document.getElementsByClassName("boardcircle");
    for(let i = 0; i < circles.length; i++) 
        {
        circles[i].classList.remove("white");
        circles[i].classList.remove("red");
        circles[i].classList.remove("green");
        circles[i].classList.remove("blue");
        circles[i].classList.remove("yellow");
        circles[i].classList.remove("black");
        circles[i].classList.remove("boardclose");
        circles[i].classList.remove("boardright");
        circles[i].classList.add("white");
        if(j > 0 && !circles[i].classList.contains("computer"))
            {
            circles[i].classList.add("active");
            j -= 1;
            }
        else if(!circles[i].classList.contains("computer"))
            {

                circles[i].classList.remove("active");
                circles[i].classList.add("disepear");
            }
        }
    facit.length = 0;
    reveal = ["false","false","false","false"]
    }

function colorswap(button)
    {
    if(button.classList.contains("active"))
        {
        if(button.classList.contains("red"))
            {
            button.classList.remove("red");
            button.classList.add("green");
            }
       else  if(button.classList.contains("green"))
        {
        button.classList.remove("green");
        button.classList.add("blue");
        }
        else  if(button.classList.contains("blue"))
            {
            button.classList.remove("blue");
            button.classList.add("yellow");
            }
        else  if(button.classList.contains("yellow"))
            {
            button.classList.remove("yellow");
            button.classList.add("white");
            }
        else  if(button.classList.contains("white"))
            {
            button.classList.remove("white");
            button.classList.add("black");
            }
        else  if(button.classList.contains("black"))
            {
            button.classList.remove("black");
            button.classList.add("red");
            }
        }
    }

    function submit() 
    {
    j = 4;
    k = 0;
    let circles = document.getElementsByClassName("boardcircle");
    
    for (let i = 0; i < circles.length; i++) 
        {
        if (circles[i].classList.contains("active")) 
            {
            circles[i].classList.remove("active");
            if(circles[i].classList.contains(facit[k]))
                {    
                circles[i].classList.add("boardright");
                reveal[k] = "true";
                console.log(reveal);
                }
            else
                {
                for(let U = 0; U < facit.length; U++)
                    {
                    if(circles[i].classList.contains(facit[U]))
                        {
                        circles[i].classList.add("boardclose");
                        console.log("added");
                        }
                    }
                }
            k += 1;
            }
        else if (circles[i].classList.contains("disepear") && j > 0 && !circles[i].classList.contains("computer")) 
            {
            circles[i].classList.remove("disepear");
            circles[i].classList.add("active");
            j -= 1;
            }
        }
    let correct = document.getElementsByClassName("computer");
    for(var i = 0; i < reveal.length; i++)
        {
        if(reveal[i] = "true")
                {
                correct[i].classList.remove("disepear");
                i++;
                correct[i].classList.add("disepear");
                i--;
                }
        }
    }
var butt = document.getElementById("nextCall");
butt.addEventListener('click', generateRandomNumber);
// console.log(butt);
var generated = [];
var x,pressed=0;
var id="yellow";
function generateAndCheck()
{
    x = Math.floor((Math.random() * 75) + 1);
    if(generated.includes(x))
        generateAndCheck();
}
function generateRandomNumber()
{
    pressed++;
    generateAndCheck(x);
    var previd = id;
    document.getElementById(previd).style.background="lightcoral";
    document.getElementById(previd).style.color="black";
    id = "c"+x;
    document.getElementById(id).style.background="#8A1313";
    document.getElementById(id).style.color="white";
    generated.push(x);
    document.getElementById("number").textContent=x;
    // console.log(generated);
    if(pressed==75)
    {
        // console.log("hogaya");
        butt.disabled=true;
    }
}
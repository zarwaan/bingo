// document.querySelector(".ticket").innerHTML = `<tr>
//     <td>1</td>
//     <td>1</td>
//     <td>67</td>
//     <td>1</td>
//     <td>1</td>
// </tr>`;
// document.querySelector(".ticket").innerHTML += `
// <tr>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
// </tr>
// <tr>
//     <td>1</td>
//     <td>1</td>
//     <!-- <td><i class="fa fa-times" aria-hidden="true"></i></td> -->
//     <td></td>
//     <td>1</td>
//     <td>1</td>
// </tr>
// <tr>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
// </tr>
// <tr>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
//     <td>1</td>
// </tr>`;

var numbersGenerated = [];
for(let i=0;i<5;i++)
{
    var thisRow = [];
    for(let j=0;j<5;j++)
    {
        let number = generateTicketNumbers(thisRow,i);
        thisRow.push(number);
    }
    numbersGenerated.push(thisRow);
}

function generateTicketNumbers(thisRow,i)
{
    number = Math.floor((Math.random() * (((i+1)*15)-(15*i)) + (i*15)+1));
    if(thisRow.includes(number))
        return generateTicketNumbers(thisRow,i);
    return number;
}

document.querySelector(".ticket").innerHTML = `
<tr>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[0][0]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[2][0]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[3][0]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[4][0]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[1][0]}</div></td>
</tr>
<tr>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[0][1]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[1][1]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[2][1]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[3][1]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[4][1]}</div></td>
</tr>
<tr>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[0][2]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[1][2]}</div></td>
    <td id="middle-cell"><img src="tubelight.jpg" id="tubelight"></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[3][2]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[4][2]}</div></td>
</tr>
<tr>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[0][3]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[1][3]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[2][3]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[3][3]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[4][3]}</div></td>
</tr>
<tr>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[0][4]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[1][4]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[2][4]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[3][4]}</div></td>
    <td><img src="circle.png" id="circle"><div>${numbersGenerated[4][4]}</div></td>
</tr>`;

document.querySelectorAll("td img").forEach(
    function(circle) 
    {
        if(circle.id!="tubelight")
            circle.style.visibility = "hidden";
    }
);


var cells = Array.prototype.slice.call(document.getElementsByTagName("td"), 0);
console.log(cells.length);
for(let i=0; i<cells.length; i++)
{
    if(cells[i].id != "middle-cell")
    {
        cells[i].addEventListener('click',mark);
    }
}
function mark()
{
    if(this.firstChild.style.visibility == "visible")
        this.firstChild.style.visibility = "hidden";
    else
        this.firstChild.style.visibility = "visible";
}
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
console.log(numbersGenerated[0][0]);
console.log('hi');
document.querySelector(".ticket").innerHTML = `
<tr>
    <td>${numbersGenerated[0][0]}</td>
    <td>${numbersGenerated[1][0]}</td>
    <td>${numbersGenerated[2][0]}</td>
    <td>${numbersGenerated[3][0]}</td>
    <td>${numbersGenerated[4][0]}</td>
</tr>
<tr>
    <td>${numbersGenerated[0][1]}</td>
    <td>${numbersGenerated[1][1]}</td>
    <td>${numbersGenerated[2][1]}</td>
    <td>${numbersGenerated[3][1]}</td>
    <td>${numbersGenerated[4][1]}</td>
</tr>
<tr>
    <td>${numbersGenerated[0][2]}</td>
    <td>${numbersGenerated[1][2]}</td>
    <td><img src="tubelight.jpg" id="tubelight"></td>
    <td>${numbersGenerated[3][2]}</td>
    <td>${numbersGenerated[4][2]}</td>
</tr>
<tr>
    <td>${numbersGenerated[0][3]}</td>
    <td>${numbersGenerated[1][3]}</td>
    <td>${numbersGenerated[2][3]}</td>
    <td>${numbersGenerated[3][3]}</td>
    <td>${numbersGenerated[4][3]}</td>
</tr>
<tr>
    <td>${numbersGenerated[0][4]}</td>
    <td>${numbersGenerated[1][4]}</td>
    <td>${numbersGenerated[2][4]}</td>
    <td>${numbersGenerated[3][4]}</td>
    <td>${numbersGenerated[4][4]}</td>
</tr>`;

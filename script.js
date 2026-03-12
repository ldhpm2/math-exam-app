function randomInt(min,max){
return Math.floor(Math.random()*(max-min+1))+min
}

function taoDe(){

let exam=""

for(let i=1;i<=10;i++){

let a=randomInt(1,10)
let b=randomInt(1,10)

exam+=`
<div class="question">
<b>Câu ${i}:</b> Giải phương trình: ${a}x + ${b} = 0
<br>
A. x = ${-b/a}
<br>
B. x = ${a}
<br>
C. x = ${b}
<br>
D. x = ${-a}
</div>
`

}

document.getElementById("exam").innerHTML=exam

}
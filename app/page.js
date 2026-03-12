"use client";

import {useState} from "react";
import {questions} from "../data/questions";

export default function Home(){

const [exam,setExam]=useState([]);

function generate(){

const shuffled=[...questions].sort(()=>0.5-Math.random());

setExam(shuffled.slice(0,3));

}

return(

<div style={{padding:40}}>

<h1>App sinh đề Toán</h1>

<button onClick={generate}>
Sinh đề
</button>

{exam.map((q,i)=>(
<div key={i} style={{marginTop:20}}>
<b>Câu {i+1}:</b> {q.question}
<br/>A. {q.A}
<br/>B. {q.B}
<br/>C. {q.C}
<br/>D. {q.D}
</div>
))}

</div>

);

}
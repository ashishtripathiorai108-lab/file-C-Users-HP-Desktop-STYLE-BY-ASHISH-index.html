function analyzeStyle(){
let text=document.getElementById("outfitInput").value.toLowerCase();
let rating=Math.floor(Math.random()*10)+1;
let confidence=(Math.random()*100).toFixed(1);
let category="Casual";
if(text.includes("suit")) category="Formal";
if(text.includes("street")) category="Streetwear";
if(text.includes("jacket")) category="Smart Casual";
let suggestion="Try adding accessories.";
if(rating>7){suggestion="Excellent fashion balance.";}
document.getElementById("result").innerHTML=
`<h3>Style Rating: ${rating}/10</h3>
<p>Category: ${category}</p>
<p>Confidence Score: ${confidence}%</p>
<p>Suggestion: ${suggestion}</p>`;
}
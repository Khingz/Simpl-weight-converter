document.getElementById("kg").style.display = "none";
document.getElementById("grams").style.display = "none";
document.getElementById("Ounce").style.display = "none";
document.getElementById("lbs").style.display = "none";

// document.getElementById("selectBtn").addEventListener("click", function() {
//     // document.getElementById("dropdown-menu").style.transition = "2s ease";
//     getElementById("dropdown-menu").classList.toggle("trans");
// });

document.getElementById("idKg").addEventListener("click", function() {
    document.getElementById("kg").style.display = "block";
    document.getElementById("grams").style.display = "none";
    document.getElementById("Ounce").style.display = "none";
    document.getElementById("lbs").style.display = "none";

});

document.getElementById("idgram").addEventListener("click", function() {
    document.getElementById("grams").style.display = "block";
    document.getElementById("kg").style.display = "none";
    document.getElementById("Ounce").style.display = "none";
    document.getElementById("lbs").style.display = "none";

});

document.getElementById("idOunce").addEventListener("click", function() {
    document.getElementById("Ounce").style.display = "block";
    document.getElementById("grams").style.display = "none";
    document.getElementById("kg").style.display = "none";
    document.getElementById("lbs").style.display = "none";
});

document.getElementById("idlbs").addEventListener("click", function() {
    document.getElementById("lbs").style.display = "block";
    document.getElementById("Ounce").style.display = "none";
    document.getElementById("grams").style.display = "none";
    document.getElementById("kg").style.display = "none";
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("kg").style.display = "none";
    document.getElementById("grams").style.display = "none";
    document.getElementById("Ounce").style.display = "none";
    document.getElementById("lbs").style.display = "none";

});


document.getElementById("kgInput").addEventListener("input", function(){
    var kg = this.value;
    
    document.getElementById("lbsOuput").innerHTML = kg*2.20462262;
    document.getElementById("gramOuput").innerHTML = kg*1000;
    document.getElementById("ozOuput").innerHTML = kg*35.274;
});

document.getElementById("gramInput").addEventListener("input", function(){
    var gram = this.value;
    
    document.getElementById("lbsOuput1").innerHTML = gram*0.002205;
    document.getElementById("kgOuput1").innerHTML = gram/1000;
    document.getElementById("ozOuput1").innerHTML = gram*0.0353;
});

document.getElementById("OunceInput").addEventListener("input", function(){
    var ounce = this.value;
    
    document.getElementById("gramsOuput3").innerHTML = ounce/0.0353;
    document.getElementById("kgOuput3").innerHTML = ounce/35.274;
    document.getElementById("lbsOuput3").innerHTML = ounce*0.0625;
});

document.getElementById("lbsInput").addEventListener("input", function(){
    var lbs = this.value;
    
    document.getElementById("gramsOuput4").innerHTML = lbs/0.002205;
    document.getElementById("kgOuput4").innerHTML = lbs/2.20462262;
    document.getElementById("ozOuput4").innerHTML = lbs/0.0625;
});
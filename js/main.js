document.getElementById("output").style.display = "none";

document.getElementById("lbsInput").addEventListener("input", function(e){
    document.getElementById("output").style.display = "block";
    let lbs = e.target.value;
    document.getElementById("gramsOuput").innerHTML = lbs/0.0022046;
    document.getElementById("kgOuput").innerHTML = lbs/2.2046;
    document.getElementById("ozOuput").innerHTML = lbs*16;
});